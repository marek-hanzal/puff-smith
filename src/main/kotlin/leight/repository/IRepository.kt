package leight.repository

import leight.checker.IChecker
import leight.page.dto.PageRequestDto
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.Expression
import org.jetbrains.exposed.sql.SizedIterable
import org.jetbrains.exposed.sql.SortOrder
import java.util.*

interface IRepository<TTable : UUIDTable, TEntity : UUIDEntity, TOrderBy : Any> {
	fun create(block: TEntity.() -> Unit): TEntity

	fun update(uuid: String, block: TEntity.() -> Unit): TEntity

	fun update(uuid: UUID, block: TEntity.() -> Unit) = update(uuid.toString(), block)

	fun delete(uuid: UUID)

	fun find(uuid: String) = find(UUID.fromString(uuid))

	fun find(uuid: EntityUUID) = find(uuid.value)

	fun find(uuid: UUID): TEntity

	fun delete(uuid: String) = delete(UUID.fromString(uuid))

	fun total(filter: EntityFilter<TEntity>? = null): Long

	fun total(filter: IChecker<TEntity>) = total(filter::check)

	fun source(pageRequestDto: PageRequestDto<TOrderBy>): SizedIterable<TEntity>

	fun page(pageRequestDto: PageRequestDto<TOrderBy>, block: (TEntity) -> Unit, filter: EntityFilter<TEntity>? = null)

	fun page(pageRequestDto: PageRequestDto<TOrderBy>, block: (TEntity) -> Unit, filter: IChecker<TEntity>) = page(pageRequestDto, block, filter::check)

	fun table(): TTable

	fun toOrderBy(orderBy: TOrderBy?): Array<Pair<Expression<*>, SortOrder>>

	fun all(): SizedIterable<TEntity>

	fun exception(throwable: Throwable): Nothing
}
