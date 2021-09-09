package ps.upgrade.u2021_08_19.storage.module.mod.dto

import kotlinx.serialization.Serializable
import leight.sdk.annotation.TypeString
import leight.dto.AbstractDto

@Serializable
data class ModFilterDto(
	@TypeString(nullable = true, optional = true)
	val fulltext: String? = null
) : AbstractDto()
