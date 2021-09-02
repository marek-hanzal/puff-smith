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

inline fun <TTable : UUIDTable, TEntity : UUIDEntity, reified TOrderBy : Any, TResult> AbstractRepository<TTable, TEntity, TOrderBy>.toPageResponse(
	pageRequestDto: PageRequestDto<TOrderBy>,
	mapper: IMapper<TEntity, TResult>,
	noinline filter: EntityFilter<TEntity>? = null
) = storage.read {
	PageResponseDto.build<TResult> {
		this.total = total(filter)
		this.size = pageRequestDto.size
		pageRequestDto.validate(this.total)
		page(pageRequestDto, { entity -> items.add(mapper.map(entity)) }, filter)
	}
}
