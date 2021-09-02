package leight.page.dto

import kotlinx.serialization.Serializable
import leight.builder.IBuilder
import leight.client.sdk.annotation.TypeLiteral
import leight.client.sdk.annotation.TypeNumber
import leight.dto.AbstractDto
import leight.page.InvalidLimitException
import leight.page.InvalidPageException
import kotlin.math.floor
import kotlin.properties.Delegates

@Serializable
data class PageRequestDto<TOrderBy : Any>(
	@TypeNumber
	val page: Int,
	@TypeNumber
	val size: Int,
	@TypeLiteral("TOrderBy | null", optional = true)
	val orderBy: TOrderBy? = null,
) : AbstractDto() {
	companion object {
		inline fun <TOrderBy : Any> build(block: Builder<TOrderBy>.() -> Unit) = Builder<TOrderBy>().apply(block).build()
	}

	val offset: Long
		get() = (page * size).toLong()

	fun pages(total: Long) = floor(total.toDouble() / size.toDouble()).toInt()

	fun validate(total: Long) = also {
		if (page < 0) {
			throw InvalidPageException("Page must be a positive number")
		}
		if (size < 1) {
			throw InvalidLimitException("Limit must be a positive number and higher than 0")
		}
		if (size > 100) {
			throw InvalidLimitException("Limit cannot be higher than 100")
		}
		val pages = pages(total)
		if (page > pages) {
			throw InvalidPageException("Out of range: page [$page] cannot be higher than [$pages]")
		}
	}

	class Builder<TOrderBy : Any> : IBuilder<PageRequestDto<TOrderBy>> {
		var page by Delegates.notNull<Int>()
		var size by Delegates.notNull<Int>()
		var orderBy: TOrderBy? = null

		override fun build() = PageRequestDto(
			page,
			size,
			orderBy,
		)
	}
}
