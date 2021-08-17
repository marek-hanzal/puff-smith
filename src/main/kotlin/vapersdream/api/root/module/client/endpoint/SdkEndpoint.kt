package vapersdream.api.root.module.client.endpoint

import io.ktor.application.*
import leight.client.sdk.ISdkGenerator
import leight.container.IContainer
import leight.rest.*

@Endpoint(
	EndpointMethod.GET,
)
class SdkEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val sdkGenerator by container.lazy<ISdkGenerator>()

	override suspend fun handle(call: ApplicationCall): Response<*> = ok(sdkGenerator.generate())
}
