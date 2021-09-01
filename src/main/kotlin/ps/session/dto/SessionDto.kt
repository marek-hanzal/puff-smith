package ps.session.dto

import leight.client.sdk.annotation.SdkClassProperty
import leight.client.sdk.annotation.SdkType
import ps.user.dto.UserDto

data class SessionDto(
	@SdkClassProperty(SdkType(UserDto::class))
	val user: UserDto,
)
