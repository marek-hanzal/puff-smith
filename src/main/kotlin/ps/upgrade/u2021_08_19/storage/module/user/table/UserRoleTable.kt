package ps.upgrade.u2021_08_19.storage.module.user.table

import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.Table
import ps.upgrade.u2021_08_19.storage.module.role.table.RoleTable

/**
 * Relation table for roles assigned to a user.
 */
object UserRoleTable : Table("user_role") {
	val user = reference("user", UserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val role = reference("role", RoleTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)

	init {
		uniqueIndex("user_role_unique", user, role)
	}
}
