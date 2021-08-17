package vapersdream.api.discovery.endpoint

import io.ktor.application.*
import leight.container.IContainer
import leight.rest.*

@Endpoint(
	public = true,
	method = EndpointMethod.GET,
	roles = [],
)
class IndexEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override suspend fun handle(call: ApplicationCall) {
		call.handle(logger) {
			ok(arrayOf<String>())
		}
	}
}
