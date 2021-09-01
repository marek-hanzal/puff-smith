package ps.session.dto

import leight.client.sdk.annotation.TypeClass
import ps.user.dto.UserDto

data class SessionDto(
	@TypeClass(UserDto::class)
	val user: UserDto,
)
