package leight.repository

import leight.checker.IChecker
import leight.page.Page
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.SizedIterable
import java.util.*

interface IRepository<TTable : UUIDTable, TEntity : UUIDEntity> {
	fun create(block: TEntity.() -> Unit): TEntity

	fun update(uuid: String, block: TEntity.() -> Unit) = find(uuid).also(block)

	fun delete(uuid: UUID)

	fun find(uuid: String) = find(UUID.fromString(uuid))

	fun find(uuid: UUID): TEntity

	fun delete(uuid: String) = delete(UUID.fromString(uuid))

	fun total(filter: EntityFilter<TEntity>? = null): Long

	fun total(filter: IChecker<TEntity>) = total(filter::check)

	fun source(paging: Page): SizedIterable<TEntity>

	fun page(paging: Page, block: (TEntity) -> Unit, filter: EntityFilter<TEntity>? = null)

	fun page(paging: Page, block: (TEntity) -> Unit, filter: IChecker<TEntity>) = page(paging, block, filter::check)

	fun table(): TTable

	fun all(): SizedIterable<TEntity>
}
