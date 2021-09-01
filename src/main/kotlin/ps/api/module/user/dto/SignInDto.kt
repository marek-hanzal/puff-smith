package ps.api.module.user.dto

import leight.client.sdk.annotation.TypeString

data class SignInDto(
	@TypeString
	val login: String,
	@TypeString
	val password: String,
)
