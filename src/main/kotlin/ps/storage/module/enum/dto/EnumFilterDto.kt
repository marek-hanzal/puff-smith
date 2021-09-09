package ps.storage.module.enum.dto

import kotlinx.serialization.Serializable
import leight.sdk.annotation.TypeString
import leight.dto.AbstractDto

@Serializable
data class EnumFilterDto(
	@TypeString(nullable = true, optional = true)
	val fulltext: String? = null
) : AbstractDto()
