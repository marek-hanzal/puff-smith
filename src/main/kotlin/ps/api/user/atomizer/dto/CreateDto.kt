package ps.api.user.atomizer.dto

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeNumber
import leight.client.sdk.annotation.TypeString

@Serializable
data class CreateDto(
	@TypeString
	val name: String,
	@TypeString
	val code: String,
	@TypeString
	val vendorId: String,
	@TypeNumber(nullable = true)
	val coils: Int?,
	@TypeNumber
	val maxCoilSize: Int,
	@TypeNumber
	val maxWraps: Int,
	@TypeNumber
	val capacity: Float,
	@TypeNumber(nullable = true)
	val squonk: Boolean?,
	@TypeNumber
	val base: Int,
)
