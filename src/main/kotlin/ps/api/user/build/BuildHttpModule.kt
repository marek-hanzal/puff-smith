package ps.api.user.build

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

/**
 * Build provides access to builds related to an atomizer - used wires, cottons, and so on.
 */
class BuildHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
		)
	}
}
