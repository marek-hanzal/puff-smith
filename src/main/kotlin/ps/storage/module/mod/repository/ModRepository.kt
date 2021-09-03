package ps.storage.module.mod.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import leight.storage.ilike
import org.jetbrains.exposed.sql.Op
import org.jetbrains.exposed.sql.SqlExpressionBuilder
import org.jetbrains.exposed.sql.or
import ps.storage.module.mod.dto.ModFilterDto
import ps.storage.module.mod.dto.ModOrderByDto
import ps.storage.module.mod.entity.ModEntity
import ps.storage.module.mod.table.ModTable

class ModRepository(container: IContainer) : AbstractRepository<ModTable, ModEntity, ModOrderByDto, ModFilterDto>(ModTable, ModEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()

	override fun toOrderBy(orderBy: ModOrderByDto?) = orderByListOf {
		add(orderBy?.name?.let(table.name::toOrderPair))
		add(orderBy?.code?.let(table.code::toOrderPair))
		add(orderBy?.power?.let(table.power::toOrderPair))
	}

	override fun filter(filter: ModFilterDto?, sqlExpressionBuilder: SqlExpressionBuilder): Op<Boolean> = filter?.fulltext?.let { fulltext ->
		table.code.ilike("%${fulltext}%") or (table.name.ilike("%${fulltext}%"))
	} ?: super.filter(filter, sqlExpressionBuilder)
}

fun IContainer.lazyModRepository() = lazy<ModRepository>()
