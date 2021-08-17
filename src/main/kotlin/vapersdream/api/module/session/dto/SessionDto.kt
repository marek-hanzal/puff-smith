package vapersdream.api.module.session.dto

import leight.client.sdk.property.SdkLiteralProperty
import java.util.*

data class SessionDto(
	@SdkLiteralProperty("string")
	val id: UUID,
	@SdkLiteralProperty("string")
	val site: String,
)
