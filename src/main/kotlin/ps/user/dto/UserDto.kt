package ps.user.dto

import leight.client.sdk.annotation.SdkArrayProperty
import leight.client.sdk.annotation.SdkLiteralProperty
import leight.client.sdk.annotation.SdkType
import ps.api.module.user.dto.RoleDto
import java.util.*

data class UserDto(
	@SdkLiteralProperty("string | null")
	val id: UUID?,
	@SdkLiteralProperty("string")
	val site: String,
	@SdkArrayProperty(SdkType(RoleDto::class))
	val roles: List<RoleDto>,
)
