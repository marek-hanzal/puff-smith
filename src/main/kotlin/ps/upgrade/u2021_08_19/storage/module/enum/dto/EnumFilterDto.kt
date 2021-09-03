package ps.upgrade.u2021_08_19.storage.module.enum.dto

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeString
import leight.dto.AbstractDto

@Serializable
data class EnumFilterDto(
	@TypeString(nullable = true, optional = true)
	val fulltext: String? = null
) : AbstractDto()
