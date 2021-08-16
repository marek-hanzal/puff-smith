package vapersdream.rest.user.liquid

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

/**
 * Access and management of all liquids a user have.
 */
class LiquidHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
		)
	}
}
