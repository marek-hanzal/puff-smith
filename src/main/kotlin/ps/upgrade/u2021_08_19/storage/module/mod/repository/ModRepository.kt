package ps.upgrade.u2021_08_19.storage.module.mod.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import ps.upgrade.u2021_08_19.storage.module.mod.entity.ModEntity
import ps.upgrade.u2021_08_19.storage.module.mod.table.ModTable

class ModRepository(container: IContainer) : AbstractRepository<ModTable, ModEntity>(ModTable, ModEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()
}

fun IContainer.lazyModRepository() = lazy<ModRepository>()
