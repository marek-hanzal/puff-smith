package vapersdream.storage.module.session.table

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import vapersdream.storage.module.user.table.UserRoleTable
import vapersdream.storage.module.user.table.UserTable

/**
 * Session tickets are... session IDs of various users; one user
 * could have more tickets, it's basically an access token to the app.
 */
object TicketTable : UUIDTable("ticket") {
	/**
	 * Hash code of a ticket used as a secondary identifier (for example user agent).
	 */
	val hash = varchar("hash", 128).uniqueIndex()

	/**
	 * Which user this ticket belongs to.
	 */
	val user = UserRoleTable.reference("user", UserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
