package ps.api.module.user.endpoint

import io.ktor.application.*
import io.ktor.request.*
import leight.client.sdk.annotation.Sdk
import leight.client.sdk.annotation.SdkType
import leight.container.IContainer
import leight.rest.*
import leight.session.ticket
import leight.storage.lazyStorage
import leight.user.UnknownUserException
import leight.user.UserException
import ps.api.module.user.dto.SignInDto
import ps.session.dto.SessionDto
import ps.storage.module.session.repository.lazyTicketRepository
import ps.storage.module.user.repository.lazyUserRepository
import ps.user.mapper.lazyUserToSessionMapper

@Endpoint(
	public = true,
	method = EndpointMethod.POST,
)
@Sdk(
	request = SdkType(SignInDto::class),
	response = SdkType(SessionDto::class),
)
class SignInEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val storage by container.lazyStorage()
	private val userRepository by container.lazyUserRepository()
	private val ticketRepository by container.lazyTicketRepository()
	private val userToSessionMapper by container.lazyUserToSessionMapper()

	override suspend fun handle(call: ApplicationCall): Response<*> = call.receive<SignInDto>().let { request ->
		call.request.header("X-Client-Hash")?.let { hash ->
			storage.transaction {
				userRepository.findByCredentials(request.login, request.password).let { user ->
					call.ticket(ticketRepository.ticketFor(user, hash))
					ok(userToSessionMapper.map(user))
				}
			}
		} ?: badRequest("Missing client hash.")
	}

	override suspend fun handleException(call: ApplicationCall, throwable: Throwable): Response<*> = when (throwable) {
		is UnknownUserException -> {
			badRequest("Bad login.")
		}
		is UserException -> {
			badRequest("Bad login.")
		}
		else -> {
			internalServerError("Kaboom")
		}
	}
}
