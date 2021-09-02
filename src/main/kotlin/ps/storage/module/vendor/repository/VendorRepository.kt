package ps.storage.module.vendor.repository

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeBool
import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.storage.module.vendor.entity.VendorEntity
import ps.storage.module.vendor.table.VendorTable

@Serializable
data class VendorOrderBy(
	@TypeBool(nullable = true, optional = true)
	val name: Boolean? = null,
	@TypeBool(nullable = true, optional = true)
	val code: Boolean? = null,
)

class VendorRepository(container: IContainer) : AbstractRepository<VendorTable, VendorEntity, VendorOrderBy>(VendorTable, VendorEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()

	override fun toOrderBy(orderBy: VendorOrderBy?) = orderByListOf {
		add(orderBy?.name?.let(table.name::toOrderPair))
		add(orderBy?.code?.let(table.code::toOrderPair))
	}
}

fun IContainer.lazyVendorRepository() = lazy<VendorRepository>()
