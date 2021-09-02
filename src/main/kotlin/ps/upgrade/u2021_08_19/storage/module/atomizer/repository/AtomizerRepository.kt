package ps.upgrade.u2021_08_19.storage.module.atomizer.repository

import leight.client.sdk.annotation.TypeNullBool
import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.upgrade.u2021_08_19.storage.module.atomizer.entity.AtomizerEntity
import ps.upgrade.u2021_08_19.storage.module.atomizer.table.AtomizerTable

data class AtomizerOrderBy(
	@TypeNullBool
	val name: Boolean?,
	@TypeNullBool
	val code: Boolean?,
)

class AtomizerRepository(container: IContainer) : AbstractRepository<AtomizerTable, AtomizerEntity, AtomizerOrderBy>(AtomizerTable, AtomizerEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()

	override fun toOrderBy(orderBy: AtomizerOrderBy?) = orderByListOf {
		add(orderBy?.name?.let(table.name::toOrderPair))
		add(orderBy?.code?.let(table.code::toOrderPair))
	}
}

fun IContainer.lazyAtomizerRepository() = lazy<AtomizerRepository>()
