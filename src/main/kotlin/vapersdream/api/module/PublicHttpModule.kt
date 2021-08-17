package vapersdream.api.module

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import vapersdream.api.module.discovery.DiscoveryHttpModule
import vapersdream.api.module.session.SessionHttpModule
import vapersdream.api.module.translation.TranslationHttpModule

class PublicHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
			DiscoveryHttpModule::class,
			TranslationHttpModule::class,
			SessionHttpModule::class,
		)
	}
}
