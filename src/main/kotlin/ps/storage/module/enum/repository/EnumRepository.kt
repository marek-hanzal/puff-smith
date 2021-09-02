package ps.storage.module.enum.repository

import leight.client.sdk.annotation.TypeNullBool
import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.storage.module.enum.entity.EnumEntity
import ps.storage.module.enum.table.EnumTable

data class EnumOrderBy(
	@TypeNullBool
	val label: Boolean?,
	@TypeNullBool
	val code: Boolean?,
	@TypeNullBool
	val category: Boolean?,
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
