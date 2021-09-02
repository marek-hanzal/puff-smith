package ps.vendor.dto

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeString
import leight.dto.AbstractDto
import leight.storage.EntityUUID

@Serializable
data class VendorDto(
	@TypeString
	val id: String,
	@TypeString
	val name: String,
	@TypeString
	val code: String,
) : AbstractDto() {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		lateinit var id: EntityUUID
		lateinit var name: String
		lateinit var code: String

		fun build() = VendorDto(
			id.value.toString(),
			name,
			code,
		)
	}
}
