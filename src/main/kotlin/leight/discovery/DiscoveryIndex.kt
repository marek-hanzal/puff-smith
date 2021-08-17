package leight.discovery

import leight.container.AbstractService
import leight.container.IContainer
import leight.link.ILinkGenerator
import leight.rest.IEndpoint
import leight.rest.IEndpointInfo

class DiscoveryIndex(container: IContainer) : AbstractService(container) {
	private val endpointInfo by container.lazy<IEndpointInfo>()
	private val linkGenerator by container.lazy<ILinkGenerator>()
	private val index = mutableMapOf<String, DiscoveryItem>()

	fun add(endpoint: IEndpoint): DiscoveryItem {
		val url = endpointInfo.getUrl(endpoint)
		return DiscoveryItem(endpointInfo.getId(endpoint), url, linkGenerator.link(url).toString()).also {
			index[it.id] = it
		}
	}

	fun index() = index.toMap()
}
