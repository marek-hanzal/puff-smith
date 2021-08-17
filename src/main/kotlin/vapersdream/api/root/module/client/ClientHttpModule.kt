package vapersdream.api.root.module.client

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import vapersdream.api.root.module.client.endpoint.SdkEndpoint

class ClientHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			SdkEndpoint::class,
		)
	}
}
