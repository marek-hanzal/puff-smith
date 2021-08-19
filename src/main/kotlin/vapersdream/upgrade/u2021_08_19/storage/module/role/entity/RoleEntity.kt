package vapersdream.upgrade.u2021_08_19.storage.module.role.entity

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import vapersdream.upgrade.u2021_08_19.storage.module.role.table.RoleTable
import vapersdream.upgrade.u2021_08_19.storage.module.role.entity.RoleEntity
import java.util.*

class RoleEntity(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<RoleEntity>(RoleTable)

	var name by RoleTable.name
}
