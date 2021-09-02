package ps.storage.module.mod.repository

import leight.client.sdk.annotation.TypeNullBool
import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.storage.module.mod.entity.ModEntity
import ps.storage.module.mod.table.ModTable

data class ModOrderBy(
	@TypeNullBool
	val name: Boolean?,
	@TypeNullBool
	val code: Boolean?,
	@TypeNullBool
	val power: Boolean?,
)

class ModRepository(container: IContainer) : AbstractRepository<ModTable, ModEntity, ModOrderBy>(ModTable, ModEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()

	override fun toOrderBy(orderBy: ModOrderBy?) = orderByListOf {
		add(orderBy?.name?.let(table.name::toOrderPair))
		add(orderBy?.code?.let(table.code::toOrderPair))
		add(orderBy?.power?.let(table.power::toOrderPair))
	}
}

fun IContainer.lazyModRepository() = lazy<ModRepository>()
