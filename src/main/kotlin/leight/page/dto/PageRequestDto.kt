package leight.page.dto

import kotlinx.serialization.Serializable
import leight.builder.IBuilder
import leight.client.sdk.annotation.TypeLiteral
import leight.client.sdk.annotation.TypeNumber
import leight.dto.AbstractDto
import leight.page.InvalidLimitException
import leight.page.InvalidPageException
import leight.sdk.annotation.Module
import kotlin.math.floor
import kotlin.properties.Delegates

@Serializable
@Module("leight")
data class PageRequestDto<TOrderBy : Any, TFilter : Any>(
	@TypeNumber
	val page: Int,
	@TypeNumber
	val size: Int,
	@TypeLiteral("TOrderBy | null", optional = true)
	val orderBy: TOrderBy? = null,
	@TypeLiteral("TFilter | null", optional = true)
	val filter: TFilter? = null,
) : AbstractDto() {
	companion object {
		inline fun <TOrderBy : Any, TFilter : Any> build(block: Builder<TOrderBy, TFilter>.() -> Unit) = Builder<TOrderBy, TFilter>().apply(block).build()
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

	class Builder<TOrderBy : Any, TFilter : Any> : IBuilder<PageRequestDto<TOrderBy, TFilter>> {
		var page by Delegates.notNull<Int>()
		var size by Delegates.notNull<Int>()
		var orderBy: TOrderBy? = null
		var filter: TFilter? = null

		override fun build() = PageRequestDto(
			page,
			size,
			orderBy,
			filter,
		)
	}
}
