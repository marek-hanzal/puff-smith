package leight.session

import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.sessions.*
import java.util.*

data class SessionTicket(
	val id: UUID,
) : Principal {
	override fun toString() = id.toString()
}

fun ApplicationCall.ticket(ticket: UUID) = sessions.set(SessionTicket(ticket))
