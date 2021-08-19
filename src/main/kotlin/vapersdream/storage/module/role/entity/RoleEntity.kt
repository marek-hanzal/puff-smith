package vapersdream.storage.module.role.entity

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import vapersdream.storage.module.role.table.RoleTable
import java.util.*

class RoleEntity(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<RoleEntity>(RoleTable)

	var name by RoleTable.name
}
