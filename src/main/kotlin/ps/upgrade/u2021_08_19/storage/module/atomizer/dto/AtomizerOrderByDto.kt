package ps.upgrade.u2021_08_19.storage.module.atomizer.dto

import kotlinx.serialization.Serializable
import leight.builder.IBuilder
import leight.client.sdk.annotation.TypeBool
import leight.dto.AbstractDto

@Serializable
data class AtomizerOrderByDto(
	@TypeBool(nullable = true, optional = true)
	val name: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val code: Boolean? = null,
) : AbstractDto() {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder : IBuilder<AtomizerOrderByDto> {
		var name: Boolean? = null
		var code: Boolean? = null

		override fun build() = AtomizerOrderByDto(
			name,
			code,
		)
	}
}
