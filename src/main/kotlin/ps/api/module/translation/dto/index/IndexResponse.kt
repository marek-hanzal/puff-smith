package ps.api.module.translation.dto.index

import leight.client.sdk.annotation.TypeArrayClass
import leight.client.sdk.annotation.TypeClass

data class IndexResponse(
	@TypeArrayClass(TypeClass(TranslationDto::class))
	val translations: List<TranslationDto>
)
