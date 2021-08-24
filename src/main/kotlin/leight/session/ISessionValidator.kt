package leight.session

import io.ktor.auth.*
import leight.config.IConfigurable
import leight.container.IContainer

interface ISessionValidator : IConfigurable {
	fun validate(sessionTicket: SessionTicket): Principal?
}

fun IContainer.lazySessionValidator() = lazy<ISessionValidator>()
