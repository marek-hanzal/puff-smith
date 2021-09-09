package ps.api.module.translation.dto.index

import kotlinx.serialization.Serializable
import leight.sdk.annotation.TypeArrayClass
import leight.sdk.annotation.TypeClass
import leight.dto.AbstractDto
import leight.sdk.annotation.Module

@Serializable
@Module("shared/translation")
data class IndexResponse(
	@TypeArrayClass(TypeClass(TranslationDto::class))
	val translations: List<TranslationDto>
) : AbstractDto()
