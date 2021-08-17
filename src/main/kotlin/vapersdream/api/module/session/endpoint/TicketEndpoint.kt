package vapersdream.api.module.session.endpoint

import io.ktor.application.*
import io.ktor.auth.*
import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.rest.*
import leight.session.SessionTicket
import vapersdream.api.module.session.dto.SessionDto

@Sdk(
	response = SessionDto::class,
)
@Endpoint(
	public = true,
	method = EndpointMethod.GET,
)
class TicketEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override suspend fun handle(call: ApplicationCall): Response<*> {
		val principal = call.principal<SessionTicket>()
		if (principal !== null) {
			return ok(SessionDto(principal.id, "public"))
		}
		return unauthorized("No ticket.")
	}
}
