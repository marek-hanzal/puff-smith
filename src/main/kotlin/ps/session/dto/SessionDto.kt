package ps.session.dto

import kotlinx.serialization.Serializable
import leight.builder.IBuilder
import leight.client.sdk.annotation.TypeClass
import leight.dto.AbstractDto
import ps.user.dto.UserDto

@Serializable
data class SessionDto(
	@TypeClass(UserDto::class)
	val user: UserDto,
) : AbstractDto() {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder : IBuilder<SessionDto> {
		lateinit var user: UserDto

		override fun build() = SessionDto(
			user,
		)
	}
}
