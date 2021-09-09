package ps.atomizer.dto

import kotlinx.serialization.Serializable
import leight.builder.IBuilder
import leight.sdk.annotation.TypeBool
import leight.sdk.annotation.TypeClass
import leight.sdk.annotation.TypeNumber
import leight.sdk.annotation.TypeString
import leight.dto.AbstractDto
import leight.sdk.annotation.Module
import leight.storage.EntityUUID
import ps.vendor.dto.VendorDto
import kotlin.properties.Delegates

@Serializable
@Module("user/atomizer")
data class AtomizerDto(
	@TypeString
	val id: String,
	@TypeString
	val name: String,
	@TypeString
	val code: String,
	@TypeClass(VendorDto::class)
	val vendor: VendorDto,
	@TypeNumber(nullable = true)
	val coils: Int?,
	@TypeNumber(nullable = true)
	val maxCoilSize: Int?,
	@TypeNumber(nullable = true)
	val maxWraps: Int?,
	@TypeNumber(nullable = true)
	val capacity: Float?,
	@TypeBool
	val squonk: Boolean,
	@TypeNumber(nullable = true)
	val base: Int?,
) : AbstractDto() {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder : IBuilder<AtomizerDto> {
		lateinit var id: EntityUUID
		lateinit var name: String
		lateinit var code: String
		lateinit var vendor: VendorDto
		var coils: Int? = null
		var maxCoilSize: Int? = null
		var maxWraps: Int? = null
		var capacity: Float? = null
		var squonk by Delegates.notNull<Boolean>()
		var base: Int? = null

		override fun build() = AtomizerDto(
			id.value.toString(),
			name,
			code,
			vendor,
			coils,
			maxCoilSize,
			maxWraps,
			capacity,
			squonk,
			base,
		)
	}
}
