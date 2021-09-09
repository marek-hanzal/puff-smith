package ps.api.user.atomizer.dto

import kotlinx.serialization.Serializable
import leight.sdk.annotation.TypeBool
import leight.sdk.annotation.TypeNumber
import leight.sdk.annotation.TypeString
import leight.sdk.annotation.Module

@Serializable
@Module("user/atomizer")
data class CreateDto(
	@TypeString
	val name: String,
	@TypeString
	val code: String,
	@TypeString
	val vendorId: String,
	@TypeNumber(nullable = true)
	val coils: Int? = null,
	@TypeNumber(nullable = true)
	val maxCoilSize: Int? = null,
	@TypeNumber(nullable = true)
	val maxWraps: Int? = null,
	@TypeNumber(nullable = true)
	val capacity: Float? = null,
	@TypeBool
	val squonk: Boolean,
	@TypeNumber(nullable = true)
	val base: Int? = null,
)
