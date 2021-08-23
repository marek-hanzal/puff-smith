package ps.api.user.battery

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

/**
 * Management of batteries which was used in particular devices; more useful for ones with mechanical mods.
 */
class BatteryHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
	}
}
