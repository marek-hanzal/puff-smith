package leight.page.dto

import leight.client.sdk.annotation.TypeNumber
import leight.dto.AbstractDto
import leight.page.InvalidLimitException
import leight.page.InvalidPageException
import kotlin.math.floor

data class PageRequestDto(
	@TypeNumber
	val page: Int,
	@TypeNumber
	val limit: Int,
) : AbstractDto() {
	@TypeNumber
	val offset: Long
		get() = (page * limit).toLong()

	fun pages(total: Long) = floor(total.toDouble() / limit.toDouble()).toInt()

	fun validate(total: Long) = also {
		if (page < 0) {
			throw InvalidPageException("Page must be a positive number")
		}
		if (limit < 1) {
			throw InvalidLimitException("Limit must be a positive number and higher than 0")
		}
		if (limit > 100) {
			throw InvalidLimitException("Limit cannot be higher than 100")
		}
		val pages = pages(total)
		if (page > pages) {
			throw InvalidPageException("Out of range: page [$page] cannot be higher than [$pages]")
		}
	}
}
