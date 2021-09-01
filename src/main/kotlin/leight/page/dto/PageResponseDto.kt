package leight.page.dto

import leight.builder.IBuilder
import leight.client.sdk.property.SdkArrayProperty
import leight.client.sdk.property.SdkLiteralProperty
import leight.dto.AbstractDto
import kotlin.math.ceil
import kotlin.properties.Delegates

data class PageResponseDto<TItem>(
	@SdkLiteralProperty("number")
	/**
	 * Total number of items available.
	 */
	val total: Long,
	@SdkLiteralProperty("number")
	/**
	 * Current page size (should correspond with other values).
	 */
	val size: Int,
	@SdkLiteralProperty("number")
	/**
	 * Total number of pages available.
	 */
	val pages: Int,
	@SdkLiteralProperty("number")
	/**
	 * Item count - it should be same as items.size().
	 */
	val count: Int,
	@SdkArrayProperty(Unit::class)
	/**
	 * Items of this page; could be also zero (thus total and others is zero).
	 */
	val items: List<TItem>,
) : AbstractDto() {
	companion object {
		inline fun <TItem> build(block: Builder<TItem>.() -> Unit) = Builder<TItem>().apply(block).build()
	}

	class Builder<TItem> : IBuilder<PageResponseDto<TItem>> {
		var total by Delegates.notNull<Long>()
		var size by Delegates.notNull<Int>()
		val items = mutableListOf<TItem>()

		override fun build() = PageResponseDto(
			total,
			size,
			ceil(total.toDouble() / size.toDouble()).toInt(),
			items.count(),
			items,
		)
	}
}
