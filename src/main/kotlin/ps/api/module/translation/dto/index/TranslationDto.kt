package ps.api.module.translation.dto.index

import leight.client.sdk.property.SdkLiteralProperty

data class TranslationDto(
	@SdkLiteralProperty("string")
	val language: String,
	@SdkLiteralProperty("string")
	val label: String,
	@SdkLiteralProperty("string")
	val text: String,
)
