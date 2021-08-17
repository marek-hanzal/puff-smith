package vapersdream.api.module.translation.dto.index

import leight.client.sdk.property.SdkArrayProperty

data class IndexResponse(
	@SdkArrayProperty(TranslationDto::class)
	val translations: Array<TranslationDto>
) {
	override fun equals(other: Any?): Boolean {
		if (this === other) return true
		if (javaClass != other?.javaClass) return false

		other as IndexResponse

		if (!translations.contentEquals(other.translations)) return false

		return true
	}

	override fun hashCode(): Int {
		return translations.contentHashCode()
	}
}
