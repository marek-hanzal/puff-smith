package ps.storage.module.atomizer.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import ps.storage.module.atomizer.entity.AtomizerEntity
import ps.storage.module.atomizer.table.AtomizerTable

class AtomizerRepository(container: IContainer) : AbstractRepository<AtomizerTable, AtomizerEntity>(AtomizerTable, AtomizerEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()
}

fun IContainer.lazyAtomizerRepository() = lazy<AtomizerRepository>()
