package ps.api.module.translation.dto.index

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeString
import leight.dto.AbstractDto
import leight.sdk.annotation.Module

@Serializable
@Module("shared/translation")
data class TranslationDto(
	@TypeString
	val language: String,
	@TypeString
	val label: String,
	@TypeString(nullable = true)
	val text: String?,
) : AbstractDto()
