package ps.upgrade.u2021_08_25.storage.module.vendor.entity

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import ps.upgrade.u2021_08_25.storage.module.vendor.table.VendorTable
import java.util.*

class VendorEntity(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<VendorEntity>(VendorTable)

	var name by VendorTable.name
	var category by VendorTable.category
	var code by VendorTable.code
}
