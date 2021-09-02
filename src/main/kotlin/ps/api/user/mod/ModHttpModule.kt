package ps.api.user.mod

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import ps.api.user.mod.endpoint.PageEndpoint

/**
 * A http module used to manage all (vaping) devices a user have.
 */
class ModHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			PageEndpoint::class,
		)
	}
}
