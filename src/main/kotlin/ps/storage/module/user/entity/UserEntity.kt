package ps.storage.module.user.entity

import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import ps.storage.module.role.entity.RoleEntity
import ps.storage.module.session.entity.TicketEntity
import ps.storage.module.session.table.TicketTable
import ps.storage.module.user.table.UserRoleTable
import ps.storage.module.user.table.UserTable

class UserEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<UserEntity>(UserTable)

	var roles by RoleEntity via UserRoleTable
	val tickets by TicketEntity referrersOn TicketTable.user

	var name by UserTable.name
	var login by UserTable.login
	var password by UserTable.password
	var site by UserTable.site
	var since by UserTable.since
}
