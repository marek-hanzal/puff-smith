package ps.user.dto

import kotlinx.serialization.Serializable
import leight.builder.IBuilder
import leight.client.sdk.annotation.TypeArrayClass
import leight.client.sdk.annotation.TypeClass
import leight.client.sdk.annotation.TypeString
import leight.dto.AbstractDto
import leight.storage.EntityUUID
import ps.role.dto.RoleDto

@Serializable
data class UserDto(
	@TypeString(nullable = true)
	val id: String?,
	@TypeString
	val name: String,
	@TypeString
	val site: String,
	@TypeArrayClass(TypeClass(RoleDto::class))
	val roles: List<RoleDto>,
) : AbstractDto() {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder : IBuilder<UserDto> {
		var id: EntityUUID? = null
		lateinit var name: String
		lateinit var site: String
		var roles = listOf<RoleDto>()

		override fun build() = UserDto(
			id?.value.toString(),
			name,
			site,
			roles,
		)
	}
}
