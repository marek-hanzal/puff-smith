package leight.rest

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*

data class MessageResponse(val message: String)
data class ErrorResponse(val error: String)
data class LinkResponse(val href: String) {
	constructor(href: Url) : this(href.toString())
}

data class Response<T>(val code: HttpStatusCode, val response: T? = null)

suspend inline fun <reified T> ApplicationCall.resolve(response: Response<T>) = if (response.response !== null) respond(response.code, response.response) else respond(response.code)

/**
 * send response with Bad Request status code
 */
fun badRequest(error: String) = Response(HttpStatusCode.BadRequest, ErrorResponse(error))

/**
 * send response with Forbidden status code
 */
fun <T> forbidden(response: T) = Response(HttpStatusCode.Forbidden, response)

fun forbidden(error: String) = forbidden(ErrorResponse(error))

/**
 * send response with Unauthorized status code
 */
fun unauthorized(error: String) = Response(HttpStatusCode.Unauthorized, ErrorResponse(error))

/**
 * send response with Created status code
 */
fun created(href: Url) = created(LinkResponse(href))

fun <T> created(response: T) = Response(HttpStatusCode.Created, response)

/**
 * send response with No Content status code
 */
fun noContent() = Response<Nothing>(HttpStatusCode.NoContent)

/**
 * send response with Not Found status code
 */
fun notFound(error: String) = Response(HttpStatusCode.NotFound, ErrorResponse(error))

/**
 * send response with Conflict status code
 */
fun conflict(error: String) = conflict(ErrorResponse(error))

fun <T> conflict(response: T) = Response(HttpStatusCode.Conflict, response)

/**
 * send response with Not Implemented status code
 */
fun notImplemented(error: String) = Response(HttpStatusCode.NotImplemented, ErrorResponse(error))

fun <T> tooManyRequests(response: T) = Response(HttpStatusCode.TooManyRequests, response)

fun tooManyRequests(error: String) = tooManyRequests(ErrorResponse(error))

/**
 * send response with Internal Server Error status code
 */
fun <T> internalServerError(response: T) = Response(HttpStatusCode.InternalServerError, response)

fun internalServerError(error: String) = internalServerError(ErrorResponse(error))

/**
 * send response with Accepted status code
 */
fun accepted(message: String) = Response(HttpStatusCode.Accepted, MessageResponse(message))

fun <T> ok(response: T) = Response(HttpStatusCode.OK, response)

fun ok() = Response(HttpStatusCode.OK, Unit)

/**
 * send response with Accepted status code
 */
fun accepted() = Response<Nothing>(HttpStatusCode.Accepted)
