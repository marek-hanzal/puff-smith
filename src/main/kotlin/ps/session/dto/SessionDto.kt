package ps.session.dto

import kotlinx.serialization.Serializable
import leight.builder.IBuilder
import leight.sdk.annotation.TypeClass
import leight.dto.AbstractDto
import leight.sdk.annotation.Module
import ps.user.dto.UserDto

@Serializable
@Module("shared/session")
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
