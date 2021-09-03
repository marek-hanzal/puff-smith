package leight.rest

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import kotlinx.serialization.Serializable

@Serializable
data class MessageResponse(val message: String)

@Serializable
data class ErrorResponse(val error: String)

@Serializable
data class LinkResponse(val href: String) {
	constructor(href: Url) : this(href.toString())
}

@Serializable
data class Response<T>(val code: Int, val response: T? = null)

suspend inline fun <T> ApplicationCall.resolve(response: Response<T>) = if (response.response !== null) respond<Any>(HttpStatusCode.fromValue(response.code), response.response) else respond(response.code)

/**
 * send response with Bad Request status code
 */
fun badRequest(error: String) = Response(HttpStatusCode.BadRequest.value, error)

/**
 * send response with Forbidden status code
 */
fun <T> forbidden(response: T) = Response(HttpStatusCode.Forbidden.value, response)

/**
 * send response with Unauthorized status code
 */
fun unauthorized(error: String) = Response(HttpStatusCode.Unauthorized.value, error)

/**
 * send response with Created status code
 */
fun <T> created(response: T) = Response(HttpStatusCode.Created.value, response)

/**
 * send response with No Content status code
 */
fun noContent() = Response<Nothing>(HttpStatusCode.NoContent.value)

/**
 * send response with Not Found status code
 */
fun notFound(error: String) = Response(HttpStatusCode.NotFound.value, error)

/**
 * send response with Conflict status code
 */
fun conflict(error: String) = conflict(ErrorResponse(error))

fun <T> conflict(response: T) = Response(HttpStatusCode.Conflict.value, response)

/**
 * send response with Not Implemented status code
 */
fun notImplemented(error: String) = Response(HttpStatusCode.NotImplemented.value, ErrorResponse(error))

fun <T> tooManyRequests(response: T) = Response(HttpStatusCode.TooManyRequests.value, response)

fun tooManyRequests(error: String) = tooManyRequests(ErrorResponse(error))

/**
 * send response with Internal Server Error status code
 */
fun <T> internalServerError(response: T) = Response(HttpStatusCode.InternalServerError.value, response)

/**
 * send response with Accepted status code
 */
fun accepted(message: String) = Response(HttpStatusCode.Accepted.value, MessageResponse(message))

fun <T> ok(response: T) = Response(HttpStatusCode.OK.value, response)

fun ok() = Response(HttpStatusCode.OK.value, Unit)

/**
 * send response with Accepted status code
 */
fun accepted() = Response<Nothing>(HttpStatusCode.Accepted.value)
