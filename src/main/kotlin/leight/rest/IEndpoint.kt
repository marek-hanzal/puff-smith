package leight.rest

import io.ktor.application.*
import io.ktor.routing.*
import leight.config.IConfigurable
import leight.repository.ConflictException

interface IEndpoint : IConfigurable {
	fun install(routing: Routing)

	suspend fun handle(call: ApplicationCall): Response<*> = notImplemented("Nothing here!")

	suspend fun handleException(call: ApplicationCall, throwable: Throwable): Response<*>? = when (throwable) {
		is ConflictException -> {
			conflict(throwable.message)
		}
		else -> {
			internalServerError("Kaboom")
		}
	}
}
