package ps.storage.module.session.entity

import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import ps.storage.module.session.table.TicketTable
import ps.storage.module.user.entity.UserEntity

class TicketEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<TicketEntity>(TicketTable)

	var ticket by TicketTable.ticket
	var hash by TicketTable.hash
	var user by UserEntity referencedOn TicketTable.user
}
