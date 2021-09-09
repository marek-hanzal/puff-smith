package ps.storage.module.mod.dto

import kotlinx.serialization.Serializable
import leight.sdk.annotation.TypeBool
import leight.sdk.annotation.Module

@Serializable
@Module("user/mod")
data class ModOrderByDto(
	@TypeBool(nullable = true, optional = true)
	val name: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val code: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val power: Boolean? = null,
)
