package ps.upgrade.u2021_08_19.storage.module.role.repository

import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.upgrade.u2021_08_19.storage.module.role.dto.RoleOrderByDto
import ps.upgrade.u2021_08_19.storage.module.role.entity.RoleEntity
import ps.upgrade.u2021_08_19.storage.module.role.table.RoleTable

class RoleRepository(container: IContainer) : AbstractRepository<RoleTable, RoleEntity, RoleOrderByDto, Unit>(RoleTable, RoleEntity, container) {
	fun findByName(name: String) = entity.find { table.name eq name }

	override fun toOrderBy(orderBy: RoleOrderByDto?) = orderByListOf {
		add(orderBy?.name?.let(table.name::toOrderPair))
	}
}

fun IContainer.lazyRoleRepository() = lazy<RoleRepository>()
