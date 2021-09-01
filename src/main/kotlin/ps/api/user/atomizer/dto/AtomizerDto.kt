package ps.api.user.atomizer.dto

import leight.client.sdk.property.SdkLiteralProperty

data class AtomizerDto(
	@SdkLiteralProperty("string")
	val name: String,
	@SdkLiteralProperty("string")
	val code: String,
	@SdkLiteralProperty("string")
	val vendorId: String,
	@SdkLiteralProperty("number")
	val coils: Int,
	@SdkLiteralProperty("number")
	val maxCoilSize: Int,
	@SdkLiteralProperty("number")
	val maxWraps: Int,
	@SdkLiteralProperty("number")
	val capacity: Float,
	@SdkLiteralProperty("boolean")
	val squonk: Boolean,
	@SdkLiteralProperty("number")
	val base: Int,
)
