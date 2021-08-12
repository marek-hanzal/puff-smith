package leight.session

import io.ktor.auth.*
import java.util.*

data class SessionTicket(
	val id: UUID,
) : Principal {
	override fun toString() = id.toString()
}
