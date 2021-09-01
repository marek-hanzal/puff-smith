package ps.user.dto

import leight.client.sdk.annotation.TypeArrayClass
import leight.client.sdk.annotation.TypeClass
import leight.client.sdk.annotation.TypeNullString
import leight.client.sdk.annotation.TypeString
import ps.api.module.user.dto.RoleDto
import java.util.*

data class UserDto(
	@TypeNullString
	val id: UUID?,
	@TypeString
	val site: String,
	@TypeArrayClass(TypeClass(RoleDto::class))
	val roles: List<RoleDto>,
)
