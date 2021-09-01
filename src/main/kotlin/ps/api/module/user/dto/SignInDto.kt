package ps.api.module.user.dto

import leight.client.sdk.annotation.SdkLiteralProperty

data class SignInDto(
	@SdkLiteralProperty("string")
	val login: String,
	@SdkLiteralProperty("string")
	val password: String,
)
