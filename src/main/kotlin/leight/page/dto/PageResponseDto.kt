package leight.page.dto

import leight.builder.IBuilder
import leight.client.sdk.annotation.TypeLiteral
import leight.client.sdk.annotation.TypeNumber
import leight.dto.AbstractDto
import kotlin.math.ceil
import kotlin.properties.Delegates

data class PageResponseDto<TItem>(
	@TypeNumber
	/**
	 * Total number of items available.
	 */
	val total: Long,
	@TypeNumber
	/**
	 * Current page size (should correspond with other values).
	 */
	val size: Int,
	@TypeNumber
	/**
	 * Total number of pages available.
	 */
	val pages: Int,
	@TypeNumber
	/**
	 * Item count - it should be same as items.size().
	 */
	val count: Int,
	@TypeLiteral("TItem[]")
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
