package ps.api.module.user.dto

import leight.client.sdk.property.SdkArrayProperty
import leight.client.sdk.property.SdkLiteralProperty
import java.util.*

data class UserDto(
	@SdkLiteralProperty("string | null")
	val id: UUID?,
	@SdkLiteralProperty("string")
	val site: String,
	@SdkArrayProperty(RoleDto::class)
	val roles: List<RoleDto>,
)
