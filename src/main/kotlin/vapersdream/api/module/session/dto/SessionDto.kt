package vapersdream.api.module.session.dto

import leight.client.sdk.property.SdkClassProperty

data class SessionDto(
	@SdkClassProperty(UserDto::class)
	val user: UserDto,
)
