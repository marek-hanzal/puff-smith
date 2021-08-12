package leight.role

import leight.container.AbstractService
import leight.container.IContainer
import java.util.*

class EmptyRoleService(container: IContainer) : AbstractService(container), IRoleService {
	override fun rolesFor(ticket: UUID) = setOf<String>()
}
