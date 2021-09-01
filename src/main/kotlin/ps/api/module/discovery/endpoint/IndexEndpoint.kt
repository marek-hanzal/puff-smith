package ps.api.module.discovery.endpoint

import io.ktor.application.*
import leight.client.sdk.annotation.Sdk
import leight.client.sdk.annotation.SdkType
import leight.container.IContainer
import leight.discovery.lazyDiscoveryIndex
import leight.rest.*
import ps.api.module.discovery.dto.index.IndexResponse

@Sdk(
	response = SdkType(IndexResponse::class),
)
@Endpoint(
	public = true,
	method = EndpointMethod.GET,
)
class IndexEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val discoveryIndex by container.lazyDiscoveryIndex()

	override suspend fun handle(call: ApplicationCall): Response<*> = ok(IndexResponse(discoveryIndex.index()))
}
