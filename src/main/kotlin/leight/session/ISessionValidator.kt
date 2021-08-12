package leight.session

import io.ktor.auth.*
import leight.config.IConfigurable

interface ISessionValidator : IConfigurable {
	fun validate(sessionTicket: SessionTicket): Principal?
}
