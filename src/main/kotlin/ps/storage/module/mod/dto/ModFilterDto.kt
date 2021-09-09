package ps.storage.module.mod.dto

import kotlinx.serialization.Serializable
import leight.sdk.annotation.TypeString
import leight.dto.AbstractDto
import leight.sdk.annotation.Module

@Serializable
@Module("user/mod")
data class ModFilterDto(
	@TypeString(nullable = true, optional = true)
	val fulltext: String? = null
) : AbstractDto()
