package leight.http

import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.sessions.*
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.json.Json
import leight.container.AbstractService
import leight.container.IContainer
import leight.role.lazyRoleService
import leight.session.SessionTicket
import leight.session.lazySessionValidator
import java.util.*
import kotlin.reflect.KClass

@ExperimentalSerializationApi
class HttpServer(container: IContainer) : AbstractService(container), IHttpServer {
	private val httpServerConfig by container.lazyHttpServerConfig()
	private val sessionValidator by container.lazySessionValidator()
	private val httpIndex by container.lazyHttpIndex()
	private val roleService by container.lazyRoleService()
	private var modules = arrayOf<KClass<out IHttpModule>>()
	private lateinit var name: String
	private val server by lazy {
		embeddedServer(Netty, httpServerConfig.port) {
			install(ForwardedHeaderSupport)
			install(AutoHeadResponse)
			install(ConditionalHeaders)
			install(PartialContent)
			install(RoleBasedAuthorization) {
				getRoles { roleService.rolesFor((it as SessionTicket).id) }
			}
			install(Compression) {
				gzip()
			}
			install(DefaultHeaders) {
				header(HttpHeaders.Server, name)
			}
			install(ContentNegotiation) {
				json(Json {
					ignoreUnknownKeys = true
					prettyPrint = true
				})
			}
			install(Sessions) {
				cookie<SessionTicket>("ticket") {
					cookie.extensions["SameSite"] = "Strict"
					cookie.maxAgeInSeconds = 3600
					cookie.encoding = CookieEncoding.DQUOTES
					this.serializer = object : SessionSerializer<SessionTicket> {
						override fun deserialize(text: String) = SessionTicket(UUID.fromString(text))

						override fun serialize(session: SessionTicket) = session.id.toString()
					}
				}
			}
			install(Authentication) {
				session<SessionTicket> {
					validate { sessionTicket ->
						request.headers["X-Client-Hash"]?.let { hash ->
							sessionValidator.validate(sessionTicket, hash)
						}
					}
				}
			}
			/**
			 * Slow server emulation
			 */
//			intercept(ApplicationCallPipeline.Features) {
//				delay(Random.nextLong(550, 1250))
//			}
			modules.distinctBy { it.qualifiedName }.forEach {
				logger.debug { "Setup: Installing module [${it.qualifiedName}]" }
				routing { container.create(it).install(this) }
				httpIndex.module(it)
			}
			if (modules.isEmpty()) {
				logger.warn { "Setup: There are no registered modules!" }
			}
		}
	}

	override fun <TModule : IHttpModule> module(module: KClass<TModule>) {
		modules += module
	}

	override fun start(name: String?, wait: Boolean) {
		this.name = name ?: "Thor, The Server"
		logger.info { "Start: [${this.name}] Listening on http://0.0.0.0:${httpServerConfig.port} (available on ${httpServerConfig.host})" }
		server.start(wait)
	}

	override fun stop(gracePeriodMillis: Long, timeoutMillis: Long) {
		server.stop(gracePeriodMillis, timeoutMillis)
	}
}
