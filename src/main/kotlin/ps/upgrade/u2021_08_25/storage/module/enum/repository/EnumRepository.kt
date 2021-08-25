package ps.upgrade.u2021_08_25.storage.module.enum.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import ps.upgrade.u2021_08_25.storage.module.enum.entity.EnumEntity
import ps.upgrade.u2021_08_25.storage.module.enum.table.EnumTable

class EnumRepository(container: IContainer) : AbstractRepository<EnumTable, EnumEntity>(EnumTable, EnumEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()
}

fun IContainer.lazyEnumRepository() = lazy<EnumRepository>()
