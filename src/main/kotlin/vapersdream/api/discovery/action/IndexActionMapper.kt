package vapersdream.api.discovery.action

import leight.container.IContainer
import leight.mapper.AbstractActionMapper
import leight.rest.Response
import vapersdream.api.discovery.action.dto.index.IndexResponse

class IndexActionMapper(container: IContainer) : AbstractActionMapper<Unit, IndexResponse, Response<Any>>(container) {
	override fun resolve(item: Unit): IndexResponse {
		return IndexResponse(
			hashMapOf(
				"a" to "b",
			)
		)
	}
}
