package ps.session

import io.ktor.auth.*
import leight.container.AbstractService
import leight.container.IContainer
import leight.session.ISessionValidator
import leight.session.SessionTicket
import leight.storage.lazyStorage
import ps.storage.module.session.repository.lazyTicketRepository

class SessionValidator(container: IContainer) : AbstractService(container), ISessionValidator {
	private val storage by container.lazyStorage()
	private val ticketRepository by container.lazyTicketRepository()

	override fun validate(sessionTicket: SessionTicket, hash: String): Principal? {
		return storage.read {
			ticketRepository.findByTicketAndHash(sessionTicket.id, hash)?.let { sessionTicket }
		}
	}
}
