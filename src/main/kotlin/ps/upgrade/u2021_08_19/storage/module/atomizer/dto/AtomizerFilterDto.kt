package ps.upgrade.u2021_08_19.storage.module.atomizer.dto

import kotlinx.serialization.Serializable
import leight.builder.IBuilder
import leight.sdk.annotation.TypeString
import leight.dto.AbstractDto

@Serializable
data class AtomizerFilterDto(
	@TypeString(nullable = true, optional = true)
	val fulltext: String? = null
) : AbstractDto() {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder : IBuilder<AtomizerFilterDto> {
		var fulltext: String? = null

		override fun build() = AtomizerFilterDto(
			fulltext,
		)
	}
}
