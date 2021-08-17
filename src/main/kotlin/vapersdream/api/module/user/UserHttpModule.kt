package vapersdream.api.module.user

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import vapersdream.api.module.user.endpoint.TicketEndpoint

class UserHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			TicketEndpoint::class,
		)
	}
}
