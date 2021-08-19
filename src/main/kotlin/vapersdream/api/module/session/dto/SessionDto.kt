package vapersdream.api.module.session.dto

import leight.client.sdk.property.SdkLiteralProperty

data class SessionDto(
	@SdkLiteralProperty("string")
	val user: UserDto,
)
