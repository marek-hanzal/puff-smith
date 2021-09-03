package ps.storage.module.role.dto

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeBool

@Serializable
data class RoleOrderByDto(
	@TypeBool(nullable = true, optional = true)
	val name: Boolean? = null,
)
