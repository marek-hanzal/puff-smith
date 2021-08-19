package vapersdream.storage.module.role.table

import org.jetbrains.exposed.dao.id.UUIDTable

/**
 * Table of roles available in the system.
 */
object RoleTable : UUIDTable("role") {
	val name = varchar("name", 32).uniqueIndex()
}
