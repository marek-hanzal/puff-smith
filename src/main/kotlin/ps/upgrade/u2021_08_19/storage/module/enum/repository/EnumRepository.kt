package ps.upgrade.u2021_08_19.storage.module.enum.repository

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeBool
import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.upgrade.u2021_08_19.storage.module.enum.entity.EnumEntity
import ps.upgrade.u2021_08_19.storage.module.enum.table.EnumTable

@Serializable
data class EnumOrderBy(
	@TypeBool(nullable = true, optional = true)
	val label: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val code: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val category: Boolean? = null,
)

class EnumRepository(container: IContainer) : AbstractRepository<EnumTable, EnumEntity, EnumOrderBy>(EnumTable, EnumEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()

	override fun toOrderBy(orderBy: EnumOrderBy?) = orderByListOf {
		add(orderBy?.label?.let(table.label::toOrderPair))
		add(orderBy?.code?.let(table.code::toOrderPair))
		add(orderBy?.category?.let(table.category::toOrderPair))
	}
}

fun IContainer.lazyEnumRepository() = lazy<EnumRepository>()
