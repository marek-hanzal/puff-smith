package ps.api.module.translation.dto.index

import leight.client.sdk.annotation.TypeNullString
import leight.client.sdk.annotation.TypeString

data class TranslationDto(
	@TypeString
	val language: String,
	@TypeString
	val label: String,
	@TypeNullString
	val text: String?,
)
