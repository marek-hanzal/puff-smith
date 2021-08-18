package vapersdream.api.module.session.endpoint

import io.ktor.application.*
import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.rest.*
import vapersdream.api.module.session.dto.LoginDto
import vapersdream.api.module.session.dto.SessionDto
import java.util.*

@Endpoint(
	EndpointMethod.POST,
)
@Sdk(
	request = LoginDto::class,
	response = SessionDto::class,
)
class LoginEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override suspend fun handle(call: ApplicationCall): Response<*> = ok(SessionDto(UUID.randomUUID(), "user"))
}
