package leight.rest

import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.pipeline.*
import leight.container.AbstractService
import leight.container.IContainer
import leight.discovery.lazyDiscoveryIndex
import leight.http.withAnyRole
import leight.rest.exception.RestException
import kotlin.reflect.full.findAnnotation

abstract class AbstractEndpoint(container: IContainer) : AbstractService(container), IEndpoint {
	private val discoveryIndex by container.lazyDiscoveryIndex()

	override fun install(routing: Routing) {
		val discoveryItem = discoveryIndex.add(this)
		val annotation = this::class.findAnnotation<Endpoint>()
			?: throw RestException("Endpoint [${this::class.qualifiedName}] does not have required Annotation [${Endpoint::class.qualifiedName}]! Specify the annotation or implement custom install method on the Endpoint.")
		val build: Route.() -> Unit = {
			val body: suspend PipelineContext<Unit, ApplicationCall>.(Unit) -> Unit = {
				call.handle(logger, { handle(call) }, { throwable ->
					handleException(call, throwable)
				})
			}
			when (annotation.method) {
				EndpointMethod.GET -> get(discoveryItem.url, body)
				EndpointMethod.POST -> post(discoveryItem.url, body)
				EndpointMethod.PATCH -> patch(discoveryItem.url, body)
				EndpointMethod.PUT -> put(discoveryItem.url, body)
				EndpointMethod.DELETE -> delete(discoveryItem.url, body)
			}
		}
		val isPublic = annotation.public
		routing.authenticate(optional = isPublic) {
			if (isPublic) {
				build(this)
			} else {
				withAnyRole(roles = annotation.roles, build)
			}
		}
	}
}
