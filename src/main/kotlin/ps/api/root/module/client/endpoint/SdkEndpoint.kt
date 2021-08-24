package ps.api.root.module.client.endpoint

import io.ktor.application.*
import leight.client.sdk.lazySdkGenerator
import leight.container.IContainer
import leight.rest.*

@Endpoint(
	EndpointMethod.GET,
)
class SdkEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val sdkGenerator by container.lazySdkGenerator()

	override suspend fun handle(call: ApplicationCall): Response<*> = ok(sdkGenerator.generate())
}
