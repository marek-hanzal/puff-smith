package ps.upgrade.u2021_08_19.storage.module.atomizer.entity

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import ps.upgrade.u2021_08_19.storage.module.atomizer.table.AtomizerPuffTable
import ps.upgrade.u2021_08_19.storage.module.atomizer.table.AtomizerTable
import ps.upgrade.u2021_08_19.storage.module.atomizer.table.AtomizerTypeTable
import ps.upgrade.u2021_08_19.storage.module.enum.entity.EnumEntity
import java.util.*

class AtomizerEntity(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<AtomizerEntity>(AtomizerTable)

	var name by AtomizerTable.name
	var code by AtomizerTable.code
	var vendor by AtomizerTable.vendor
	var coils by AtomizerTable.coils
	var maxCoilSize by AtomizerTable.maxCoilSize
	var maxWraps by AtomizerTable.maxWraps
	var capacity by AtomizerTable.capacity
	var squonk by AtomizerTable.squonk
	var base by AtomizerTable.base
	var type by EnumEntity via AtomizerTypeTable
	var puff by EnumEntity via AtomizerPuffTable
}
