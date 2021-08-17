package leight.rest

import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.util.pipeline.*
import leight.container.AbstractService
import leight.container.IContainer
import leight.http.withAnyRole
import leight.rest.exception.RestException
import kotlin.reflect.full.findAnnotation

abstract class AbstractEndpoint(container: IContainer) : AbstractService(container), IEndpoint {
	override fun install(routing: Routing) {
		val name = this::class.qualifiedName!!.split(".")
		val endpoint = name.subList(1, name.size)
			.joinToString(".")
			.replace("endpoint.", "")
			.replace("Endpoint", "")
			.lowercase()
		val url = endpoint.replace(".", "/")
		val annotation = this::class.findAnnotation<Endpoint>()
			?: throw RestException("Endpoint [${this::class.qualifiedName}] does not have required Annotation [${Endpoint::class.qualifiedName}]! Specify the annotation or implement custom install method on the Endpoint.")
		val build: Route.() -> Unit = {
			val body: suspend PipelineContext<Unit, ApplicationCall>.(Unit) -> Unit = { handle(call) }
			when (annotation.method) {
				EndpointMethod.GET -> get(url, body)
				EndpointMethod.POST -> post(url, body)
				EndpointMethod.PATCH -> patch(url, body)
				EndpointMethod.PUT -> put(url, body)
				EndpointMethod.DELETE -> delete(url, body)
			}
		}
		routing.authenticate(optional = annotation.public) {
			if (annotation.public) {
				build(this)
			} else {
				withAnyRole(roles = annotation.roles, build)
			}
		}
	}

	open suspend fun handle(call: ApplicationCall) {
		call.respond(HttpStatusCode.NotImplemented, "Nothing here (501)")
	}
}
