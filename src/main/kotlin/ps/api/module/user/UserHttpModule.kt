package ps.api.module.user

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import ps.api.module.user.endpoint.SignInEndpoint
import ps.api.module.user.endpoint.SignUpEndpoint

class UserHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			SignInEndpoint::class,
			SignUpEndpoint::class,
		)
	}
}
