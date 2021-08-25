package ps.upgrade.u2021_08_19.storage.module.enum.entity

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import ps.upgrade.u2021_08_19.storage.module.enum.table.EnumTable
import java.util.*

class EnumEntity(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<EnumEntity>(EnumTable)

	var label by EnumTable.label
	var code by EnumTable.code
	var category by EnumTable.category
}
