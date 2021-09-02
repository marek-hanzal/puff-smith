package leight.repository

import leight.container.AbstractService
import leight.container.IContainer
import leight.page.dto.PageRequestDto
import leight.storage.lazyStorage
import org.jetbrains.exposed.dao.EntityClass
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.exceptions.ExposedSQLException
import org.jetbrains.exposed.sql.Expression
import org.jetbrains.exposed.sql.SortOrder
import org.jetbrains.exposed.sql.selectAll
import java.util.*
import kotlin.math.max

abstract class AbstractRepository<TTable : UUIDTable, TEntity : UUIDEntity, TOrderBy : Any>(
	val table: TTable,
	val entity: EntityClass<UUID, TEntity>,
	container: IContainer,
) : AbstractService(container), IRepository<TTable, TEntity, TOrderBy> {
	val storage by container.lazyStorage()

	override fun create(block: TEntity.() -> Unit) = try {
		entity.new { block(this) }
	} catch (e: Throwable) {
		exception(e)
	}

	override fun update(uuid: String, block: TEntity.() -> Unit) = try {
		find(uuid).also(block)
	} catch (e: Throwable) {
		exception(e)
	}

	override fun delete(uuid: UUID) = try {
		storage.write { find(uuid).delete() }
	} catch (e: Throwable) {
		exception(e)
	}

	override fun total(filter: EntityFilter<TEntity>?) = filter?.let { entity.all().filter(it).sumOf { 1.0 }.toLong() } ?: entity.table.slice(entity.table.id).selectAll().count()

	override fun find(uuid: UUID) = entity.findById(uuid) ?: throw UnknownEntityException("Requested entity [${entity::class}] with uuid [${uuid}] does not exists.")

	override fun source(pageRequestDto: PageRequestDto<TOrderBy>) = entity.all().orderBy(*toOrderBy(pageRequestDto.orderBy)).limit(pageRequestDto.size, pageRequestDto.offset)

	override fun page(pageRequestDto: PageRequestDto<TOrderBy>, block: (TEntity) -> Unit, filter: EntityFilter<TEntity>?) {
		var current = pageRequestDto
		var contract = 0
		var size = 1
		while (contract < size && size > 0) {
			source(current).let { collection ->
				size = collection.count().toInt()
				(filter?.let { collection.filter(filter) } ?: collection).let {
					it.take(max(0, size - contract)).forEach { item -> block(item) }
					contract += it.count()
				}
				current = PageRequestDto.build {
					this.page = current.page + 1
					this.size = current.size
				}
			}
		}
	}

	override fun table() = table

	override fun all() = entity.all()

	override fun exception(throwable: Throwable): Nothing = when (throwable) {
		is ExposedSQLException -> {
			/**
			 * Automagically check unique index violations.
			 */
			table.uniqueIndices().forEach {
				throwable.message?.contains(it.indexName, ignoreCase = true)?.let { conflict ->
					conflict && throw ConflictException("Unique conflict on [${table.tableName}.${it.indexName}].", throwable)
				}
			}
			throw throwable
		}
		else -> throw throwable
	}

	override fun toOrderBy(orderBy: TOrderBy?): Array<Pair<Expression<*>, SortOrder>> = arrayOf()
}
