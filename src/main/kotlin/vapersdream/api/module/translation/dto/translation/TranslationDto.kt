package vapersdream.api.module.translation.dto.translation

data class TranslationDto(
	val language: String,
	val namespace: String,
	val label: String,
	val text: String,
)
