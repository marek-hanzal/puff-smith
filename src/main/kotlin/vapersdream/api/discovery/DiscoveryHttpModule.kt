package vapersdream.api.discovery

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import vapersdream.api.discovery.endpoint.IndexEndpoint

/**
 * A module used to provide client-side discovery of services on this server.
 */
class DiscoveryHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			IndexEndpoint::class,
		)
	}
}
