package leight.rest

import io.ktor.application.*
import io.ktor.routing.*
import leight.config.IConfigurable

interface IEndpoint : IConfigurable {
	fun install(routing: Routing)

	suspend fun handle(call: ApplicationCall): Response<*> = notImplemented("Nothing here!")

	suspend fun exception(call: ApplicationCall, exception: Throwable): Response<*>? = internalServerError("Kaboom")
}
