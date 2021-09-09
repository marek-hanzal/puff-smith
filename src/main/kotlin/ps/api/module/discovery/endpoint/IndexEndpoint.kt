package ps.api.module.discovery.endpoint

import io.ktor.application.*
import leight.client.sdk.annotation.TypeClass
import leight.container.IContainer
import leight.discovery.lazyDiscoveryIndex
import leight.rest.*
import leight.sdk.annotation.Module
import ps.api.module.discovery.dto.index.IndexResponse

@Endpoint(
	public = true,
	method = EndpointMethod.GET,
	response = TypeClass(IndexResponse::class),
)
@Module("shared/discovery")
class IndexEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val discoveryIndex by container.lazyDiscoveryIndex()

	override suspend fun handle(call: ApplicationCall): Response<*> = ok(IndexResponse(discoveryIndex.index()))
}
