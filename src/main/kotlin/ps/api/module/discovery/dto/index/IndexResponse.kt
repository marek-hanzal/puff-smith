package ps.api.module.discovery.dto.index

import leight.client.sdk.annotation.TypeLiteral
import leight.discovery.DiscoveryItem
import leight.sdk.annotation.Module

@Module("shared/discovery")
data class IndexResponse(
	@TypeLiteral("IDiscoveryIndex")
	val index: Map<String, DiscoveryItem>,
)
