package ps.api.root

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import ps.api.root.module.client.ClientHttpModule

/**
 * Root module has the access to the lowest part of the application going around any
 * rules in the system.
 */
class RootHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
			ClientHttpModule::class,
		)
	}
}
