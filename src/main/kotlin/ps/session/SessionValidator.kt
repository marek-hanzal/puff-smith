package ps.session

import io.ktor.auth.*
import leight.container.AbstractService
import leight.container.IContainer
import leight.session.ISessionValidator
import leight.session.SessionTicket

class SessionValidator(container: IContainer) : AbstractService(container), ISessionValidator {
	override fun validate(sessionTicket: SessionTicket): Principal? {
		return null
	}
}
