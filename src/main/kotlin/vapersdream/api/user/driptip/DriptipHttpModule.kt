package vapersdream.api.user.driptip

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

/**
 * Everything is important so are drip tips. So this is a module for managing them.
 */
class DriptipHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
		)
	}
}
