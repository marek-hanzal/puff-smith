package ps.api.user.atomizer

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import ps.api.user.atomizer.endpoint.CreateEndpoint
import ps.api.user.atomizer.endpoint.PageEndpoint

/**
 * An endpoint used to track all user's atomizers (and all that relevant stuff).
 */
class AtomizerHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			CreateEndpoint::class,
			PageEndpoint::class,
		)
	}
}
