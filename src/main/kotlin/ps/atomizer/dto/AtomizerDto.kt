package ps.atomizer.dto

import leight.builder.IBuilder
import leight.client.sdk.annotation.SdkClassProperty
import leight.client.sdk.annotation.SdkLiteralProperty
import leight.client.sdk.annotation.SdkType
import leight.dto.AbstractDto
import leight.storage.EntityUUID
import ps.vendor.dto.VendorDto
import kotlin.properties.Delegates

data class AtomizerDto(
	@SdkLiteralProperty("string")
	val id: String,
	@SdkLiteralProperty("string")
	val name: String,
	@SdkLiteralProperty("string")
	val code: String,
	@SdkClassProperty(SdkType(VendorDto::class))
	val vendor: VendorDto,
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
) : AbstractDto() {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder : IBuilder<AtomizerDto> {
		lateinit var id: EntityUUID
		lateinit var name: String
		lateinit var code: String
		lateinit var vendor: VendorDto
		var coils by Delegates.notNull<Int>()
		var maxCoilSize by Delegates.notNull<Int>()
		var maxWraps by Delegates.notNull<Int>()
		var capacity by Delegates.notNull<Float>()
		var squonk by Delegates.notNull<Boolean>()
		var base by Delegates.notNull<Int>()

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
