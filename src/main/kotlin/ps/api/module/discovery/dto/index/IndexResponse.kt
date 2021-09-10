package ps.api.module.discovery.dto.index

import leight.discovery.DiscoveryItem
import leight.sdk.annotation.Module
import leight.sdk.annotation.TypeClass
import leight.sdk.annotation.TypeObjectIndex

@Module("shared/discovery")
data class IndexResponse(
	@TypeObjectIndex(TypeClass(DiscoveryItem::class))
	val index: Map<String, DiscoveryItem>,
)
