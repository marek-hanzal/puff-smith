package ps.api.user.ohm

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

/**
 * Provides services for computing various stuff related to the Ohm's law.
 */
class OhmHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
	}
}
