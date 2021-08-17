package vapersdream.api.discovery.endpoint

import io.ktor.application.*
import leight.container.IContainer
import leight.rest.*
import vapersdream.api.discovery.action.IndexActionMapper

@Endpoint(
	public = true,
	method = EndpointMethod.GET,
	roles = [],
)
class IndexEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val indexActionMapper by container.lazy<IndexActionMapper>()

	override suspend fun handle(call: ApplicationCall): Response<*> = ok(indexActionMapper.resolve(Unit))

	override suspend fun exception(call: ApplicationCall, exception: Throwable): Response<*>? = indexActionMapper.exception(exception)
}
