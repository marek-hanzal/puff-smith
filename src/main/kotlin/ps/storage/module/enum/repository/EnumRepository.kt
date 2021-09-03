package ps.storage.module.enum.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.storage.module.enum.dto.EnumFilterDto
import ps.storage.module.enum.dto.EnumOrderByDto
import ps.storage.module.enum.entity.EnumEntity
import ps.storage.module.enum.table.EnumTable

class EnumRepository(container: IContainer) : AbstractRepository<EnumTable, EnumEntity, EnumOrderByDto, EnumFilterDto>(EnumTable, EnumEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()

	override fun toOrderBy(orderBy: EnumOrderByDto?) = orderByListOf {
		add(orderBy?.label?.let(table.label::toOrderPair))
		add(orderBy?.code?.let(table.code::toOrderPair))
		add(orderBy?.category?.let(table.category::toOrderPair))
	}
}

fun IContainer.lazyEnumRepository() = lazy<EnumRepository>()
