package ps.api.module.translation.dto.index

import leight.client.sdk.annotation.SdkArrayProperty
import leight.client.sdk.annotation.SdkType

data class IndexResponse(
	@SdkArrayProperty(SdkType(TranslationDto::class))
	val translations: List<TranslationDto>
)
