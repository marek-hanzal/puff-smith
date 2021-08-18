package vapersdream.api.module.session.dto

import leight.client.sdk.property.SdkLiteralProperty

data class LoginDto(
	@SdkLiteralProperty("string")
	val user: String,
	@SdkLiteralProperty("string")
	val password: String,
)
