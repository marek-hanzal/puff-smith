package ps.storage.module.vendor.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import ps.storage.module.vendor.entity.VendorEntity
import ps.storage.module.vendor.table.VendorTable

class VendorRepository(container: IContainer) : AbstractRepository<VendorTable, VendorEntity>(VendorTable, VendorEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()
}

fun IContainer.lazyVendorRepository() = lazy<VendorRepository>()
