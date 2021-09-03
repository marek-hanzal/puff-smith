package ps.upgrade.u2021_08_19.storage.module.mod.dto

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeBool

@Serializable
data class ModOrderByDto(
	@TypeBool(nullable = true, optional = true)
	val name: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val code: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val power: Boolean? = null,
)
