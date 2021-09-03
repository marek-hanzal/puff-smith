package ps.api.user.vendor

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import ps.api.user.vendor.endpoint.PageEndpoint

class VendorHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			PageEndpoint::class,
		)
	}
}
