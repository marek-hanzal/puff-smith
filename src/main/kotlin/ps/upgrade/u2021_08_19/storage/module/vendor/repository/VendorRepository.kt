package ps.upgrade.u2021_08_19.storage.module.vendor.repository

import leight.client.sdk.annotation.TypeNullBool
import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.upgrade.u2021_08_19.storage.module.vendor.entity.VendorEntity
import ps.upgrade.u2021_08_19.storage.module.vendor.table.VendorTable

data class VendorOrderBy(
	@TypeNullBool
	val name: Boolean?,
	@TypeNullBool
	val code: Boolean?,
)

class VendorRepository(container: IContainer) : AbstractRepository<VendorTable, VendorEntity, VendorOrderBy>(VendorTable, VendorEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()

	override fun toOrderBy(orderBy: VendorOrderBy?) = orderByListOf {
		add(orderBy?.name?.let(table.name::toOrderPair))
		add(orderBy?.code?.let(table.code::toOrderPair))
	}
}

fun IContainer.lazyVendorRepository() = lazy<VendorRepository>()
