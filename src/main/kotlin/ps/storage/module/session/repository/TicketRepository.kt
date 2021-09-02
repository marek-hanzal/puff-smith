package ps.storage.module.session.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import org.jetbrains.exposed.sql.and
import org.jetbrains.exposed.sql.deleteWhere
import ps.storage.module.session.entity.TicketEntity
import ps.storage.module.session.table.TicketTable
import ps.storage.module.user.entity.UserEntity
import java.util.*

class TicketRepository(container: IContainer) : AbstractRepository<TicketTable, TicketEntity, Unit>(TicketTable, TicketEntity, container) {
	fun ticketFor(userEntity: UserEntity, fingerprint: String): UUID = UUID.randomUUID().also { uuid ->
		create {
			ticket = uuid
			user = userEntity
			hash = fingerprint
		}
	}

	fun findByTicket(ticket: UUID): TicketEntity? = entity.find { table.ticket eq ticket }.firstOrNull()

	fun findByTicketAndHash(ticket: UUID, hash: String) = entity.find { table.ticket eq ticket and (table.hash eq hash) }.firstOrNull()

	fun drop(ticket: UUID) = table.deleteWhere { TicketTable.ticket eq ticket }
}

fun IContainer.lazyTicketRepository() = lazy<TicketRepository>()
