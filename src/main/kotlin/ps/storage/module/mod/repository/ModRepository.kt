package ps.storage.module.mod.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import ps.storage.module.mod.entity.ModEntity
import ps.storage.module.mod.table.ModTable

class ModRepository(container: IContainer) : AbstractRepository<ModTable, ModEntity>(ModTable, ModEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()
}

fun IContainer.lazyModRepository() = lazy<ModRepository>()
