package vapersdream.api.module.discovery.dto.index

import leight.client.sdk.property.SdkIndexProperty
import leight.discovery.DiscoveryItem

data class IndexResponse(
	@SdkIndexProperty(DiscoveryItem::class)
	val index: Map<String, DiscoveryItem>,
)
