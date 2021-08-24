package ps.api.module.user.dto

import leight.client.sdk.property.SdkLiteralProperty

data class SignInDto(
	@SdkLiteralProperty("string")
	val login: String,
	@SdkLiteralProperty("string")
	val password: String,
)
