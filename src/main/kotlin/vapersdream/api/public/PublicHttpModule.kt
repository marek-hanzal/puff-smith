package vapersdream.api.public

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import vapersdream.api.public.endpoint.TranslationEndpoint

class PublicHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			TranslationEndpoint::class,
		)
	}
}
