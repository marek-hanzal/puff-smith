package ps.api.module.user.dto

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeString
import leight.dto.AbstractDto

@Serializable
data class SignInDto(
	@TypeString
	val login: String,
	@TypeString
	val password: String,
) : AbstractDto()
