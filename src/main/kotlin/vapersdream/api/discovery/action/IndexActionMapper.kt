package vapersdream.api.discovery.action

import leight.container.IContainer
import leight.discovery.DiscoveryIndex
import leight.mapper.AbstractActionMapper
import leight.rest.Response
import vapersdream.api.discovery.action.dto.index.IndexResponse

class IndexActionMapper(container: IContainer) : AbstractActionMapper<Unit, IndexResponse, Response<Any>>(container) {
	private val discoveryIndex by container.lazy<DiscoveryIndex>()

	override fun resolve(item: Unit): IndexResponse {
		return IndexResponse(discoveryIndex.index())
	}
}
