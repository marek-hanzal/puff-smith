package vapersdream.api.root

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

/**
 * Root module has the access to the lowest part of the application going around any
 * rules in the system.
 */
class RootHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
	}
}
