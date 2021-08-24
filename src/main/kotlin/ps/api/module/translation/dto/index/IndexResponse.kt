package ps.api.module.translation.dto.index

import leight.client.sdk.property.SdkArrayProperty

data class IndexResponse(
	@SdkArrayProperty(TranslationDto::class)
	val translations: List<TranslationDto>
)
