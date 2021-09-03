package ps.upgrade.u2021_08_19.storage.module.enum.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.upgrade.u2021_08_19.storage.module.enum.dto.EnumFilterDto
import ps.upgrade.u2021_08_19.storage.module.enum.dto.EnumOrderByDto
import ps.upgrade.u2021_08_19.storage.module.enum.entity.EnumEntity
import ps.upgrade.u2021_08_19.storage.module.enum.table.EnumTable

class EnumRepository(container: IContainer) : AbstractRepository<EnumTable, EnumEntity, EnumOrderByDto, EnumFilterDto>(EnumTable, EnumEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()

	override fun toOrderBy(orderBy: EnumOrderByDto?) = orderByListOf {
		add(orderBy?.label?.let(table.label::toOrderPair))
		add(orderBy?.code?.let(table.code::toOrderPair))
		add(orderBy?.category?.let(table.category::toOrderPair))
	}
}

fun IContainer.lazyEnumRepository() = lazy<EnumRepository>()
