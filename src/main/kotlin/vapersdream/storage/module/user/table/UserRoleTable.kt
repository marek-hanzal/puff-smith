package vapersdream.storage.module.user.table

import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table
import vapersdream.storage.module.role.table.RoleTable

/**
 * Relation table for roles assigned to a user.
 */
object UserRoleTable : Table("user-role") {
	val user = reference("user", UserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val role = reference("role", RoleTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)

	init {
		uniqueIndex("user-role.unique", user, role)
	}
}
