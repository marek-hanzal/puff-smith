package vapersdream.api.module.translation.endpoint

import io.ktor.application.*
import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.rest.*
import vapersdream.api.module.translation.dto.index.IndexResponse

@Sdk(
	response = IndexResponse::class,
)
@Endpoint(
	public = true,
	method = EndpointMethod.GET,
)
class IndexEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override suspend fun handle(call: ApplicationCall): Response<*> = ok(IndexResponse(arrayOf()))
}
