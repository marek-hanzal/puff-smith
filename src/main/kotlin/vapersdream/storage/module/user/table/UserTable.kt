package vapersdream.storage.module.user.table

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.jodatime.datetime
import org.joda.time.DateTime

/**
 * Common simple user entity - should be as simple as possible; if needed some more adjustments, use 1:1 relation table for it as
 * an extension (OK, not that simple but quite clean as this could be than moved to library).
 */
object UserTable : UUIDTable("user") {
	/**
	 * Some general login identifier (does not matter if is that username or email or whatever).
	 */
	val login = varchar("login", 128).uniqueIndex()

	/**
	 * !!Encrypted!! password. Really. Strong.
	 */
	val password = varchar("password", 128).nullable()

	/**
	 * The strange thing here: main access site of the user; could be explicitly said or guessed based on
	 * user's roles.
	 */
	val site = varchar("site", 128).nullable()

	/**
	 * From when the user is registered in the system.
	 */
	val since = datetime("since").clientDefault { DateTime() }
}
