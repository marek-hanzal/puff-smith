package ps.api.module.session.endpoint

import io.ktor.application.*
import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.rest.*
import ps.api.module.session.dto.LoginDto
import ps.api.module.session.dto.SessionDto
import ps.api.module.user.dto.UserDto

@Endpoint(
	method = EndpointMethod.POST,
)
@Sdk(
	request = LoginDto::class,
	response = SessionDto::class,
)
class LoginEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override suspend fun handle(call: ApplicationCall): Response<*> = ok(SessionDto(UserDto("user", "user", arrayOf())))
}
