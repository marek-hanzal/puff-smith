package leight.repository

import leight.mapper.IMapper
import leight.page.dto.PageRequestDto
import leight.page.dto.PageResponseDto
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.Expression
import org.jetbrains.exposed.sql.SortOrder
import org.jetbrains.exposed.sql.Table

fun Table.uniqueIndices() = indices.filter { index -> index.unique }

fun orderByListOf(block: MutableList<Pair<Expression<*>, SortOrder>?>.() -> Unit) = mutableListOf<Pair<Expression<*>, SortOrder>?>().apply(block).filterNotNull().toTypedArray()

fun <T> Expression<T>.toOrderPair(order: Boolean) = Pair(this, if (order) SortOrder.ASC else SortOrder.DESC)

fun <TTable : UUIDTable, TEntity : UUIDEntity, TOrderBy : Any, TFilter : Any, TResult> AbstractRepository<TTable, TEntity, TOrderBy, TFilter>.toPageResponse(
	pageRequestDto: PageRequestDto<TOrderBy, TFilter>,
	mapper: IMapper<TEntity, TResult>,
	entityFilter: EntityFilter<TEntity>? = null
) = storage.read {
	PageResponseDto.build<TResult> {
		this.total = total(pageRequestDto.filter, entityFilter)
		this.size = pageRequestDto.size
		pageRequestDto.validate(this.total)
		page(pageRequestDto, { entity -> items.add(mapper.map(entity)) }, entityFilter)
	}
}
