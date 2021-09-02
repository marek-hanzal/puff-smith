package leight.repository

import io.ktor.application.*
import io.ktor.request.*
import kotlinx.coroutines.runBlocking
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

inline fun <TTable : UUIDTable, TEntity : UUIDEntity, reified TOrderBy : Any, TResult> AbstractRepository<TTable, TEntity, TOrderBy>.page(
	call: ApplicationCall,
	mapper: IMapper<TEntity, TResult>,
	noinline filter: EntityFilter<TEntity>? = null
): PageResponseDto<TResult> =
	page<TEntity, TOrderBy, TResult>(call, { total(filter) }, mapper, { pageRequestDto, block ->
		page(pageRequestDto, block, filter)
	})

inline fun <TEntity : UUIDEntity, reified TOrderBy : Any, TResult> page(call: ApplicationCall, total: () -> Long, mapper: IMapper<TEntity, TResult>, block: (PageRequestDto<TOrderBy>, (TEntity) -> Unit) -> Unit) =
	PageResponseDto.build<TResult> {
		val pageRequestDto = runBlocking { call.receive<PageRequestDto<TOrderBy>>() }
		this.total = total()
		this.size = pageRequestDto.size
		block(pageRequestDto.validate(this@build.total)) { entity -> items.add(mapper.map(entity)) }
	}
