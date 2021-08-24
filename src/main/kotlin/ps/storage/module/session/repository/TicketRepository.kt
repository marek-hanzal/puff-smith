package ps.storage.module.session.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import ps.storage.module.session.entity.TicketEntity
import ps.storage.module.session.table.TicketTable
import ps.storage.module.user.entity.UserEntity
import java.util.*

class TicketRepository(container: IContainer) : AbstractRepository<TicketTable, TicketEntity>(TicketTable, TicketEntity, container) {
	fun ticketFor(userEntity: UserEntity, fingerprint: String): UUID = UUID.randomUUID().also { uuid ->
		create {
			ticket = uuid
			user = userEntity
			hash = fingerprint
		}
	}
}

fun IContainer.lazyTicketRepository() = lazy<TicketRepository>()
