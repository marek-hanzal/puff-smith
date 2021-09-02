package ps.api.module.translation.dto.index

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeString

@Serializable
data class TranslationDto(
	@TypeString
	val language: String,
	@TypeString
	val label: String,
	@TypeString(nullable = true)
	val text: String?,
)
