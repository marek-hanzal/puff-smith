package vapersdream.storage.module.session.entity

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import vapersdream.storage.module.session.table.TicketTable
import vapersdream.storage.module.user.entity.UserEntity
import java.util.*

class TicketEntity(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<TicketEntity>(TicketTable)

	var hash by TicketTable.hash
	var user by UserEntity referencedOn TicketTable.user
}
