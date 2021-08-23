package ps.api.module.discovery.dto.index

import leight.client.sdk.property.SdkLiteralProperty
import leight.discovery.DiscoveryItem

data class IndexResponse(
	@SdkLiteralProperty("IDiscoveryIndex")
	val index: Map<String, DiscoveryItem>,
)
