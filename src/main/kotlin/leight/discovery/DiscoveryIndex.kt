package leight.discovery

import leight.container.AbstractService
import leight.container.IContainer
import leight.link.ILinkGenerator
import leight.rest.IEndpoint

typealias IEndpointFilter = (endpoint: IEndpoint) -> String

class DiscoveryIndex(container: IContainer) : AbstractService(container) {
	private val linkGenerator by container.lazy<ILinkGenerator>()
	private val index = mutableMapOf<String, DiscoveryItem>()
	private var toId: IEndpointFilter = { "" }
	private var toUrl: IEndpointFilter = { "/api/" + toId(it).trimStart('.').replace(".", "/") }

	fun setIdFilter(filter: IEndpointFilter) {
		toId = filter
	}

	fun add(endpoint: IEndpoint): DiscoveryItem {
		val url = toUrl(endpoint)
		return DiscoveryItem(toId(endpoint), url, linkGenerator.link(url).toString()).also {
			index[it.id] = it
		}
	}

	fun index() = index.toMap()
}
