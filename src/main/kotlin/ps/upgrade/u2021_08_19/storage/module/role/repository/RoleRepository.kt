package ps.upgrade.u2021_08_19.storage.module.role.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import ps.upgrade.u2021_08_19.storage.module.role.entity.RoleEntity
import ps.upgrade.u2021_08_19.storage.module.role.table.RoleTable

class RoleRepository(container: IContainer) : AbstractRepository<RoleTable, RoleEntity>(RoleTable, RoleEntity, container) {
	fun findByName(name: String) = entity.find { table.name eq name }
}

fun IContainer.lazyRoleRepository() = lazy<RoleRepository>()
