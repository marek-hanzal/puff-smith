package leight.rest

import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.util.pipeline.*
import leight.container.AbstractService
import leight.container.IContainer
import leight.http.withAnyRole
import kotlin.reflect.full.findAnnotation

abstract class AbstractEndpoint(container: IContainer) : AbstractService(container), IEndpoint {
	override fun install(routing: Routing) {
		val endpoint = this::class.qualifiedName!!
			.replace("vapersdream", "")
			.replace("endpoint.", "")
			.replace("Endpoint", "")
			.lowercase()
		val url = endpoint.replace(".", "/")
		val annotation = this::class.findAnnotation<Endpoint>()
			?: throw RestException("Endpoint [${this::class.qualifiedName}] does not have required Annotation [${Endpoint::class.qualifiedName}]! Specify the annotation or implement custom install method on the Endpoint.")
//		if (annotation.public) {
//			when (annotation.method) {
//				EndpointMethod.GET -> {
//					routing.get(url) {
//						call.respond("yaaay!")
//					}
//				}
//			}
//		}
		val build: Route.() -> Unit = {
			val body: suspend PipelineContext<Unit, ApplicationCall>.(Unit) -> Unit = {
				call.respond("yaaay!")
			}
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
}
