package ps.upgrade.u2021_08_19.storage.module.mod.repository

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeBool
import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.upgrade.u2021_08_19.storage.module.mod.entity.ModEntity
import ps.upgrade.u2021_08_19.storage.module.mod.table.ModTable

@Serializable
data class ModOrderBy(
	@TypeBool(nullable = true, optional = true)
	val name: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val code: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val power: Boolean? = null,
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
