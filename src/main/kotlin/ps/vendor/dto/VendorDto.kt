package ps.vendor.dto

import leight.storage.EntityUUID

data class VendorDto(
	val id: String,
	val name: String,
	val code: String,
) {
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
