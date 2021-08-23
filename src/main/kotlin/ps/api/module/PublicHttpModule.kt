package ps.api.module

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import ps.api.module.discovery.DiscoveryHttpModule
import ps.api.module.session.SessionHttpModule
import ps.api.module.translation.TranslationHttpModule
import ps.api.module.user.UserHttpModule

class PublicHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
			DiscoveryHttpModule::class,
			TranslationHttpModule::class,
			SessionHttpModule::class,
			UserHttpModule::class,
		)
	}
}
