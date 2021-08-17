package leight.rest

import com.google.gson.JsonSyntaxException
import io.ktor.application.*
import leight.rest.exception.CollectionException
import leight.rest.exception.InvalidRequestException
import leight.rest.exception.ResourceLimitException
import leight.rest.exception.UnauthorizedException
import mu.KLogger

suspend inline fun <reified TResponse, reified TException> ApplicationCall.handle(
	logger: KLogger,
	block: ApplicationCall.() -> Response<TResponse>,
	exception: (Throwable) -> Response<TException>?,
) {
	try {
		resolve(block(this))
	} catch (e: JsonSyntaxException) {
		logger.error(e.message, e)
		resolve(badRequest("Malformed JSON"))
	} catch (e: NoSuchElementException) {
		logger.error(e.message, e)
		resolve(notFound("Item not found!"))
	} catch (e: InvalidRequestException) {
		logger.error(e.message, e)
		resolve(badRequest(e.message ?: "You sent something strange and I don't understand your request. Try read docs, make a coffee or fix this bug :)"))
	} catch (e: UnauthorizedException) {
		logger.error(e.message, e)
		resolve(forbidden("Your request looks not good for us, sorry."))
	} catch (e: ResourceLimitException) {
		logger.error(e.message, e)
		resolve(tooManyRequests(e.message ?: "Resource limit reached!"))
	} catch (e: CollectionException) {
		resolve(badRequest(e.message ?: "You sent something strange and I don't understand your request. Try read docs, make a coffee or fix this bug :)"))
	} catch (e: Throwable) {
		logger.error(e.message, e)
		try {
			exception(e)?.let { resolve(it) } ?: throw e
		} catch (e: Throwable) {
			resolve(internalServerError("Some ugly internal server error happened!"))
		}
	}
}

suspend inline fun <reified TResponse> ApplicationCall.handle(
	logger: KLogger,
	block: ApplicationCall.() -> Response<TResponse>,
) = handle<TResponse, Unit>(
	logger,
	block,
) { null }
