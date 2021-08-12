package leight.rest

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*

data class Response<T>(val code: HttpStatusCode, val response: T? = null)

suspend inline fun <reified T> ApplicationCall.resolve(response: Response<T>) = if (response.response !== null) respond(response.code, response.response) else respond(response.code)
