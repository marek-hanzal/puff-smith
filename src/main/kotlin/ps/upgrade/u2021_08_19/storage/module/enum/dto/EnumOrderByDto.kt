package ps.upgrade.u2021_08_19.storage.module.enum.dto

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeBool

@Serializable
data class EnumOrderByDto(
	@TypeBool(nullable = true, optional = true)
	val label: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val code: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val category: Boolean? = null,
)
