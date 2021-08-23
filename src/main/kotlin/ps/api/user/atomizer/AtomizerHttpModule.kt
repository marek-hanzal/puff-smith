package ps.api.user.atomizer

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

/**
 * An endpoint used to track all user's atomizers (and all that relevant stuff).
 */
class AtomizerHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
		)
	}
}
