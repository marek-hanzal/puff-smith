package vapersdream.api.user.base

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

/**
 * Management of base liquids for mixing.
 */
class BaseHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
	}
}
