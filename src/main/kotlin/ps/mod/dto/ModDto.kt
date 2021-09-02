package ps.mod.dto

import kotlinx.serialization.Serializable
import leight.builder.IBuilder
import leight.client.sdk.annotation.TypeBool
import leight.client.sdk.annotation.TypeClass
import leight.client.sdk.annotation.TypeString
import leight.dto.AbstractDto
import leight.storage.EntityUUID
import ps.user.dto.UserDto

@Serializable
data class ModDto(
	@TypeString
	val id: String,
	@TypeString
	val name: String,
	@TypeString
	val code: String,
	@TypeClass(UserDto::class, optional = false, nullable = true)
	val approvedBy: UserDto?,
	@TypeBool
	val isApproved: Boolean,
) : AbstractDto() {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder : IBuilder<ModDto> {
		lateinit var id: EntityUUID
		lateinit var name: String
		lateinit var code: String
		var approvedBy: UserDto? = null

		override fun build() = ModDto(
			id.value.toString(),
			name,
			code,
			approvedBy,
			isApproved = approvedBy != null
		)
	}
}
