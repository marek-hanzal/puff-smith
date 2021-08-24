package ps.upgrade.u2021_08_19.storage.module.session.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import ps.upgrade.u2021_08_19.storage.module.session.entity.TicketEntity
import ps.upgrade.u2021_08_19.storage.module.session.table.TicketTable
import ps.upgrade.u2021_08_19.storage.module.user.entity.UserEntity
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
