package leight.discovery

import leight.client.sdk.annotation.TypeString

data class DiscoveryItem(
	@TypeString
	val id: String,
	@TypeString
	val url: String,
	@TypeString
	val link: String,
)
