package vapersdream.api.module.user.endpoint

import io.ktor.application.*
import io.ktor.auth.*
import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.rest.*
import leight.session.SessionTicket
import vapersdream.api.module.user.dto.user.UserDto

@Sdk(
	response = UserDto::class,
)
@Endpoint(
	public = true,
	method = EndpointMethod.GET,
)
class TicketEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override suspend fun handle(call: ApplicationCall): Response<*> {
		val principal = call.principal<SessionTicket>()
		if (principal !== null) {
			return ok(UserDto(principal.id, "public"))
		}
		return unauthorized("No ticket.")
	}
}
