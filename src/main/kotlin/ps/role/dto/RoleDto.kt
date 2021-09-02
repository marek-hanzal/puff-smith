package ps.role.dto

import kotlinx.serialization.Serializable
import leight.builder.IBuilder
import leight.client.sdk.annotation.TypeString
import leight.dto.AbstractDto
import leight.storage.EntityUUID

@Serializable
data class RoleDto(
	@TypeString
	val id: String,
	@TypeString
	val name: String,
) : AbstractDto() {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder : IBuilder<RoleDto> {
		lateinit var id: EntityUUID
		lateinit var name: String

		override fun build() = RoleDto(
			id.value.toString(),
			name,
		)
	}
}
