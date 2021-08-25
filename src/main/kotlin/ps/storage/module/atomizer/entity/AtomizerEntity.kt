package ps.storage.module.atomizer.entity

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import ps.storage.module.atomizer.table.AtomizerTable
import ps.storage.module.atomizer.table.AtomizerTypeTable
import ps.storage.module.enum.entity.EnumEntity
import java.util.*

class AtomizerEntity(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<AtomizerEntity>(AtomizerTable)

	var name by AtomizerTable.name
	var vendor by AtomizerTable.vendor
	var coils by AtomizerTable.coils
	var capacity by AtomizerTable.capacity
	var squonk by AtomizerTable.squonk
	var base by AtomizerTable.base
	var type by EnumEntity via AtomizerTypeTable
}
