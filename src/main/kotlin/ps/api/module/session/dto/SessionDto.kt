package ps.api.module.session.dto

import leight.client.sdk.property.SdkClassProperty
import ps.api.module.user.dto.UserDto

data class SessionDto(
	@SdkClassProperty(UserDto::class)
	val user: UserDto,
)
