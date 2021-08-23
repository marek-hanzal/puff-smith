package ps.api.module.translation

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import ps.api.module.translation.endpoint.IndexEndpoint

class TranslationHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			IndexEndpoint::class,
		)
	}
}
