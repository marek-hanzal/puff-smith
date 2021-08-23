package ps.api.user.steeping

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

/**
 * A mixed liquid with all relevant parameters: the base, flask, nicotine and time to... steep.
 */
class SteepingHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
	}
}
