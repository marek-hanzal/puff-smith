package ps.storage.module.atomizer.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import leight.storage.ilike
import org.jetbrains.exposed.sql.Op
import org.jetbrains.exposed.sql.SqlExpressionBuilder
import org.jetbrains.exposed.sql.or
import ps.storage.module.atomizer.dto.AtomizerFilterDto
import ps.storage.module.atomizer.dto.AtomizerOrderByDto
import ps.storage.module.atomizer.entity.AtomizerEntity
import ps.storage.module.atomizer.table.AtomizerTable

class AtomizerRepository(container: IContainer) : AbstractRepository<AtomizerTable, AtomizerEntity, AtomizerOrderByDto, AtomizerFilterDto>(AtomizerTable, AtomizerEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()

	override fun toOrderBy(orderBy: AtomizerOrderByDto?) = orderByListOf {
		add(orderBy?.name?.let(table.name::toOrderPair))
		add(orderBy?.code?.let(table.code::toOrderPair))
		add(orderBy?.maxWraps?.let(table.maxWraps::toOrderPair))
		add(orderBy?.coils?.let(table.coils::toOrderPair))
		add(orderBy?.maxCoilSize?.let(table.maxCoilSize::toOrderPair))
		add(orderBy?.base?.let(table.base::toOrderPair))
		add(orderBy?.capacity?.let(table.capacity::toOrderPair))
	}

	override fun filter(filter: AtomizerFilterDto?, sqlExpressionBuilder: SqlExpressionBuilder): Op<Boolean> = filter?.fulltext?.let { fulltext ->
		table.code.ilike("%${fulltext}%") or (table.name.ilike("%${fulltext}%"))
	} ?: super.filter(filter, sqlExpressionBuilder)
}

fun IContainer.lazyAtomizerRepository() = lazy<AtomizerRepository>()
