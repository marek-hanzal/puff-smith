package ps.upgrade.u2021_08_25.storage.module.session.table

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import ps.upgrade.u2021_08_25.storage.module.user.table.UserTable

/**
 * Session tickets are... session IDs of various users; one user
 * could have more tickets, it's basically an access token to the app.
 */
object TicketTable : UUIDTable("ticket") {
	/**
	 * Ticket of a user (basically session id).
	 */
	val ticket = uuid("ticket").uniqueIndex("ticket_ticket_unique")

	/**
	 * Hash code of a ticket used as a secondary identifier (for example user agent).
	 */
	val hash = varchar("hash", 128)

	/**
	 * Which user this ticket belongs to.
	 */
	val user = reference("user", UserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
