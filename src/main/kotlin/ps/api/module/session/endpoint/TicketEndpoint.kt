package ps.api.module.session.endpoint

import io.ktor.application.*
import io.ktor.auth.*
import leight.client.sdk.annotation.Sdk
import leight.client.sdk.annotation.TypeClass
import leight.container.IContainer
import leight.rest.*
import leight.session.SessionTicket
import leight.storage.lazyStorage
import ps.session.dto.SessionDto
import ps.session.mapper.lazyTicketToSessionMapper
import ps.storage.module.session.repository.lazyTicketRepository
import ps.user.mapper.lazyUserToSessionMapper

@Sdk(
	response = TypeClass(SessionDto::class),
)
@Endpoint(
	public = true,
	method = EndpointMethod.GET,
)
class TicketEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val storage by container.lazyStorage()
	private val ticketRepository by container.lazyTicketRepository()
	private val ticketToSessionMapper by container.lazyTicketToSessionMapper()
	private val userToSessionMapper by container.lazyUserToSessionMapper()

	override suspend fun handle(call: ApplicationCall): Response<*> = call.authentication.principal<SessionTicket>()?.let { sessionTicket ->
		storage.read {
			ticketRepository.findByTicket(sessionTicket.id)?.let { ticketEntity ->
				ok(ticketToSessionMapper.map(ticketEntity))
			}
		}
	} ?: ok(userToSessionMapper.public())
}
