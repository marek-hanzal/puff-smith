package ps.api.module.user.dto

import leight.client.sdk.property.SdkLiteralProperty
import java.util.*

data class RoleDto(
	@SdkLiteralProperty("string")
	val id: UUID,
	@SdkLiteralProperty("string")
	val name: String,
)
