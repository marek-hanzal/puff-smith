package leight.discovery

import leight.client.sdk.annotation.SdkLiteralProperty

data class DiscoveryItem(
	@SdkLiteralProperty("string")
	val id: String,
	@SdkLiteralProperty("string")
	val url: String,
	@SdkLiteralProperty("string")
	val link: String,
)
