package ps.upgrade.u2021_08_19.storage.module.atomizer.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.upgrade.u2021_08_19.storage.module.atomizer.dto.AtomizerFilterDto
import ps.upgrade.u2021_08_19.storage.module.atomizer.dto.AtomizerOrderByDto
import ps.upgrade.u2021_08_19.storage.module.atomizer.entity.AtomizerEntity
import ps.upgrade.u2021_08_19.storage.module.atomizer.table.AtomizerTable

class AtomizerRepository(container: IContainer) : AbstractRepository<AtomizerTable, AtomizerEntity, AtomizerOrderByDto, AtomizerFilterDto>(AtomizerTable, AtomizerEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()

	override fun toOrderBy(orderBy: AtomizerOrderByDto?) = orderByListOf {
		add(orderBy?.name?.let(table.name::toOrderPair))
		add(orderBy?.code?.let(table.code::toOrderPair))
	}
}

fun IContainer.lazyAtomizerRepository() = lazy<AtomizerRepository>()
