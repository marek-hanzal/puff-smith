package vapersdream.upgrade.u2021_08_19.storage.module.session.entity

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import vapersdream.upgrade.u2021_08_19.storage.module.session.table.TicketTable
import vapersdream.upgrade.u2021_08_19.storage.module.user.entity.UserEntity
import java.util.*

class TicketEntity(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<TicketEntity>(TicketTable)

	var hash by TicketTable.hash
	var user by UserEntity referencedOn TicketTable.user
}
