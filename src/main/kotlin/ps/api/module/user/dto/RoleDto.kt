package ps.api.module.user.dto

import leight.client.sdk.annotation.TypeString
import java.util.*

data class RoleDto(
	@TypeString
	val id: UUID,
	@TypeString
	val name: String,
)
