package ps.storage.module.vendor.table

import org.jetbrains.exposed.dao.id.UUIDTable

object VendorTable : UUIDTable("vendor") {
	val name = varchar("name", 64)
	val category = varchar("category", 64)

	init {
		uniqueIndex("vendor_name_category_unique", name, category)
	}
}
