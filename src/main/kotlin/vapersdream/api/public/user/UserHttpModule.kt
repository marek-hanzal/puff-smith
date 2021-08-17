package vapersdream.api.public.user

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import vapersdream.api.public.user.endpoint.TicketEndpoint

class UserHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			TicketEndpoint::class,
		)
	}
}
