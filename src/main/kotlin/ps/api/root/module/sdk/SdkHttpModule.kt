package ps.api.root.module.sdk

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import ps.api.root.module.sdk.endpoint.DownloadEndpoint

class SdkHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			DownloadEndpoint::class,
		)
	}
}
