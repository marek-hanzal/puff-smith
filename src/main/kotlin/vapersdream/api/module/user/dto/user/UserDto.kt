package vapersdream.api.module.user.dto.user

import leight.client.sdk.property.SdkLiteralProperty
import java.util.*

data class UserDto(
	@SdkLiteralProperty("string")
	val id: UUID,
	@SdkLiteralProperty("string")
	val site: String,
)
