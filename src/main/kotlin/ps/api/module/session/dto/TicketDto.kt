package ps.api.module.session.dto

import leight.client.sdk.property.SdkLiteralProperty

data class TicketDto(
	@SdkLiteralProperty("string")
	val hash: String
)
