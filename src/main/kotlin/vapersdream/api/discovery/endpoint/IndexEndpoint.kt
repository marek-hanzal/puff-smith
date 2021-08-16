package vapersdream.api.discovery.endpoint

import io.ktor.application.*
import io.ktor.http.*
import leight.container.IContainer
import leight.rest.*

@Endpoint(
	public = true,
	method = EndpointMethod.GET,
	roles = [],
)
class IndexEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override suspend fun handle(call: ApplicationCall) {
		call.resolve(Response(HttpStatusCode.BadGateway, "some response, ghe"))
	}
}
