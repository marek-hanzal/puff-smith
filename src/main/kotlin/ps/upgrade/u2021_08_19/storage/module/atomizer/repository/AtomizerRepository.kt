package ps.upgrade.u2021_08_19.storage.module.atomizer.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import ps.upgrade.u2021_08_19.storage.module.atomizer.entity.AtomizerEntity
import ps.upgrade.u2021_08_19.storage.module.atomizer.table.AtomizerTable

class AtomizerRepository(container: IContainer) : AbstractRepository<AtomizerTable, AtomizerEntity>(AtomizerTable, AtomizerEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()
}

fun IContainer.lazyAtomizerRepository() = lazy<AtomizerRepository>()
