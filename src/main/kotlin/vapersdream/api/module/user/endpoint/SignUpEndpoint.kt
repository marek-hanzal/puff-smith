package vapersdream.api.module.user.endpoint

import io.ktor.application.*
import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.rest.AbstractEndpoint
import leight.rest.Endpoint
import leight.rest.EndpointMethod
import leight.rest.Response
import vapersdream.api.module.session.dto.SessionDto
import vapersdream.api.module.user.dto.SignUpDto

@Endpoint(
	public = true,
	method = EndpointMethod.POST,
)
@Sdk(
	request = SignUpDto::class,
	response = SessionDto::class,
)
class SignUpEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override suspend fun handle(call: ApplicationCall): Response<*> {
		return super.handle(call)
	}
}
