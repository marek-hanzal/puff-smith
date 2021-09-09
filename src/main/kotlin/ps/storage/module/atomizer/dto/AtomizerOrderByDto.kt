package ps.storage.module.atomizer.dto

import kotlinx.serialization.Serializable
import leight.builder.IBuilder
import leight.sdk.annotation.TypeBool
import leight.dto.AbstractDto
import leight.sdk.annotation.Module

@Serializable
@Module("user/atomizer")
data class AtomizerOrderByDto(
	@TypeBool(nullable = true, optional = true)
	val name: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val code: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val maxWraps: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val base: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val capacity: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val maxCoilSize: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val coils: Boolean? = null,
) : AbstractDto() {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder : IBuilder<AtomizerOrderByDto> {
		var name: Boolean? = null
		var code: Boolean? = null
		var maxWraps: Boolean? = null
		var base: Boolean? = null
		var capacity: Boolean? = null
		var maxCoilSize: Boolean? = null
		var coils: Boolean? = null

		override fun build() = AtomizerOrderByDto(
			name,
			code,
			maxWraps,
			base,
			capacity,
			maxCoilSize,
			coils,
		)
	}
}
