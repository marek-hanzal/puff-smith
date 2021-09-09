package leight.discovery

import leight.sdk.annotation.TypeString
import leight.sdk.annotation.Module

@Module("shared/discovery")
data class DiscoveryItem(
	@TypeString
	val id: String,
	@TypeString
	val url: String,
	@TypeString
	val link: String,
)
