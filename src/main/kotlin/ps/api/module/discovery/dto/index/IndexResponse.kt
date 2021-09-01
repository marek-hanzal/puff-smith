package ps.api.module.discovery.dto.index

import leight.client.sdk.annotation.SdkLiteralProperty
import leight.discovery.DiscoveryItem

data class IndexResponse(
	@SdkLiteralProperty("IDiscoveryIndex")
	val index: Map<String, DiscoveryItem>,
)
