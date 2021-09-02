package leight.page.dto

import kotlinx.serialization.Serializable
import leight.builder.IBuilder
import leight.client.sdk.annotation.TypeLiteral
import leight.client.sdk.annotation.TypeNumber
import leight.dto.AbstractDto
import kotlin.math.ceil
import kotlin.properties.Delegates

@Serializable
open class PageResponseDto<TItem>(
	/**
	 * Total number of items available.
	 */
	@TypeNumber
	val total: Long,
	/**
	 * Current page size (should correspond with other values).
	 */
	@TypeNumber
	val size: Int,
	/**
	 * Total number of pages available.
	 */
	@TypeNumber
	val pages: Int,
	/**
	 * Item count - it should be same as items.size().
	 */
	@TypeNumber
	val count: Int,
	/**
	 * Items of this page; could be also zero (thus total and others is zero).
	 */
	@TypeLiteral("TItem[]")
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
