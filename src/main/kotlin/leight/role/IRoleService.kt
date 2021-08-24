package leight.role

import leight.container.IContainer
import java.util.*

interface IRoleService {
	fun rolesFor(ticket: UUID): Set<String>
}

fun IContainer.lazyRoleService() = lazy<IRoleService>()
