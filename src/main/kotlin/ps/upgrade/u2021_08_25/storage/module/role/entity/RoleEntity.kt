package ps.upgrade.u2021_08_25.storage.module.role.entity

import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import ps.upgrade.u2021_08_25.storage.module.role.table.RoleTable

class RoleEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<RoleEntity>(RoleTable)

	var name by RoleTable.name
}
