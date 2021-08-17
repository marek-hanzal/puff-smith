package vapersdream.api.discovery.endpoint

import io.ktor.application.*
import leight.container.IContainer
import leight.discovery.DiscoveryIndex
import leight.rest.*
import vapersdream.api.discovery.dto.index.IndexResponse

@Endpoint(
	public = true,
	method = EndpointMethod.GET,
)
class IndexEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val discoveryIndex by container.lazy<DiscoveryIndex>()

	override suspend fun handle(call: ApplicationCall): Response<*> = ok(IndexResponse(discoveryIndex.index()))
}
