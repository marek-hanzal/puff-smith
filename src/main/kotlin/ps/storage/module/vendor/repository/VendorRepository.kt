package ps.storage.module.vendor.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import leight.storage.ilike
import org.jetbrains.exposed.sql.Op
import org.jetbrains.exposed.sql.SqlExpressionBuilder
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.or
import ps.storage.module.vendor.dto.VendorFilterDto
import ps.storage.module.vendor.dto.VendorOrderByDto
import ps.storage.module.vendor.entity.VendorEntity
import ps.storage.module.vendor.table.VendorTable
import java.util.*

class VendorRepository(container: IContainer) : AbstractRepository<VendorTable, VendorEntity, VendorOrderByDto, VendorFilterDto>(VendorTable, VendorEntity, container) {
	fun findByCode(code: String) = entity.find { table.code eq code }.first()

	override fun toOrderBy(orderBy: VendorOrderByDto?) = orderByListOf {
		add(orderBy?.name?.let(table.name::toOrderPair))
		add(orderBy?.code?.let(table.code::toOrderPair))
	}

	override fun filter(filter: VendorFilterDto?, sqlExpressionBuilder: SqlExpressionBuilder): Op<Boolean> = Op.build {
		filter?.fulltext?.let { fulltext ->
			try {
				table.code.ilike("%${fulltext}%") or (table.name.ilike("%${fulltext}%") or (table.category.ilike("%${fulltext}%")) or (table.id.eq(UUID.fromString(fulltext))))
			} catch (e: Throwable) {
				table.code.ilike("%${fulltext}%") or (table.name.ilike("%${fulltext}%") or (table.category.ilike("%${fulltext}%")))
			}
		} ?: Op.TRUE
	}.and {
		filter?.category?.let { category ->
			table.category eq category
		} ?: Op.TRUE
	}
}

fun IContainer.lazyVendorRepository() = lazy<VendorRepository>()
