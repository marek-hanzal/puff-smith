package vapersdream.rest.user.wire

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

/**
 * Wires are very important, so this module is intended to manage them.
 */
class WireHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {

	}
}
