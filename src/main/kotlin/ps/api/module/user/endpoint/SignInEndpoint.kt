package ps.api.module.user.endpoint

import io.ktor.application.*
import io.ktor.request.*
import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.rest.*
import leight.session.ticket
import leight.storage.lazyStorage
import ps.api.module.session.dto.SessionDto
import ps.api.module.user.dto.SignInDto
import ps.api.module.user.dto.UserDto
import ps.storage.module.session.repository.lazyTicketRepository
import ps.storage.module.user.repository.lazyUserRepository

@Endpoint(
	public = true,
	method = EndpointMethod.POST,
)
@Sdk(
	request = SignInDto::class,
	response = SessionDto::class,
)
class SignInEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val storage by container.lazyStorage()
	private val userRepository by container.lazyUserRepository()
	private val ticketRepository by container.lazyTicketRepository()

	override suspend fun handle(call: ApplicationCall): Response<*> = call.receive<SignInDto>().let { request ->
		call.request.header("X-Client-Hash")?.let { hash ->
			storage.transaction {
				userRepository.findByCredentials(request.login, request.password).let { user ->
					call.ticket(ticketRepository.ticketFor(user, hash))
					ok(SessionDto(UserDto(user.id.value.toString(), user.site ?: "locked", arrayOf())))
				}
			}
		} ?: badRequest("Missing client hash.")
	}
}
