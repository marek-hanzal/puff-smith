package ps.api.module.session.endpoint

import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.request.*
import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.rest.*
import leight.session.SessionTicket
import ps.api.module.session.dto.SessionDto
import ps.api.module.session.dto.TicketDto
import ps.api.module.user.dto.UserDto
import ps.storage.module.session.repository.lazyTicketRepository

@Sdk(
	request = TicketDto::class,
	response = SessionDto::class,
)
@Endpoint(
	public = true,
	method = EndpointMethod.POST,
)
class TicketEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val ticketRepository by container.lazyTicketRepository()

	override suspend fun handle(call: ApplicationCall): Response<*> = call.receive<TicketDto>().let { tickeRequest ->
		call.authentication.principal<SessionTicket>()?.let { sessionTicket ->
			ok(SessionDto(UserDto(sessionTicket.id.toString(), "public", arrayOf())))
		} ?: ok(SessionDto(UserDto("public", "public", arrayOf())))
	}
}
