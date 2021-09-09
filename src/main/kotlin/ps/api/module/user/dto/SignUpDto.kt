package ps.api.module.user.dto

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeString
import leight.dto.AbstractDto
import leight.sdk.annotation.Module

@Serializable
@Module("shared/user")
data class SignUpDto(
	@TypeString
	val name: String,
	@TypeString
	val login: String,
	@TypeString
	val password: String,
) : AbstractDto()
