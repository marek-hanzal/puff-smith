package ps.api.module.user.endpoint

import io.ktor.application.*
import io.ktor.sessions.*
import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.rest.*
import leight.session.SessionTicket
import leight.storage.lazyStorage
import ps.storage.module.session.repository.lazyTicketRepository

@Endpoint(
	public = true,
	method = EndpointMethod.DELETE,
)
@Sdk
class SignOutEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val storage by container.lazyStorage()
	private val ticketRepository by container.lazyTicketRepository()

	override suspend fun handle(call: ApplicationCall): Response<*> {
		call.sessions.get<SessionTicket>()?.let { sessionTicket -> storage.write { ticketRepository.drop(sessionTicket.id) } }
		call.sessions.clear<SessionTicket>()
		return ok()
	}
}
