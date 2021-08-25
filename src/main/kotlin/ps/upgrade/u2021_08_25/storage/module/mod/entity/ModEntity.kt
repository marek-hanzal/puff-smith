package ps.upgrade.u2021_08_25.storage.module.mod.entity

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import ps.upgrade.u2021_08_25.storage.module.mod.table.ModTable
import java.util.*

class ModEntity(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<ModEntity>(ModTable)

	var name by ModTable.name
	var vendor by ModTable.vendor
	var code by ModTable.code
	var with510 by ModTable.with510
	var pod by ModTable.pod
	var squonk by ModTable.squonk
	var mechanical by ModTable.mechanical
	var bypass by ModTable.bypass
	var batteries by ModTable.batteries
	var capacity by ModTable.capacity
	var power by ModTable.power
	var efficiency by ModTable.efficiency
}
