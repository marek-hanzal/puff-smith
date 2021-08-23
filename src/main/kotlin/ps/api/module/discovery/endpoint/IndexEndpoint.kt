package ps.api.module.discovery.endpoint

import io.ktor.application.*
import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.discovery.DiscoveryIndex
import leight.rest.*
import ps.api.module.discovery.dto.index.IndexResponse

@Sdk(
	response = IndexResponse::class,
)
@Endpoint(
	public = true,
	method = EndpointMethod.GET,
)
class IndexEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val discoveryIndex by container.lazy<DiscoveryIndex>()

	override suspend fun handle(call: ApplicationCall): Response<*> = ok(IndexResponse(discoveryIndex.index()))
}
