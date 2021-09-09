package ps.storage.module.vendor.dto

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeString
import leight.sdk.annotation.Module

@Serializable
@Module("user/vendor")
data class VendorFilterDto(
	@TypeString(optional = true, nullable = true)
	val fulltext: String? = null,
	@TypeString(optional = true, nullable = true)
	val category: String? = null,
)
