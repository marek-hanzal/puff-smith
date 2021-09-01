package ps.api.user.atomizer.dto

import leight.client.sdk.annotation.TypeNullBool
import leight.client.sdk.annotation.TypeNullNumber
import leight.client.sdk.annotation.TypeNumber
import leight.client.sdk.annotation.TypeString

data class CreateDto(
	@TypeString
	val name: String,
	@TypeString
	val code: String,
	@TypeString
	val vendorId: String,
	@TypeNullNumber
	val coils: Int?,
	@TypeNumber
	val maxCoilSize: Int,
	@TypeNumber
	val maxWraps: Int,
	@TypeNumber
	val capacity: Float,
	@TypeNullBool
	val squonk: Boolean?,
	@TypeNumber
	val base: Int,
)
