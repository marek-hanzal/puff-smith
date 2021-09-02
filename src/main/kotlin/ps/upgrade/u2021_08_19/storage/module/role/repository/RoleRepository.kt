package ps.upgrade.u2021_08_19.storage.module.role.repository

import kotlinx.serialization.Serializable
import leight.client.sdk.annotation.TypeBool
import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.repository.orderByListOf
import leight.repository.toOrderPair
import ps.upgrade.u2021_08_19.storage.module.role.entity.RoleEntity
import ps.upgrade.u2021_08_19.storage.module.role.table.RoleTable

@Serializable
data class RoleOrderBy(
	@TypeBool(nullable = true, optional = true)
	val name: Boolean? = null,
)

class RoleRepository(container: IContainer) : AbstractRepository<RoleTable, RoleEntity, RoleOrderBy>(RoleTable, RoleEntity, container) {
	fun findByName(name: String) = entity.find { table.name eq name }

	override fun toOrderBy(orderBy: RoleOrderBy?) = orderByListOf {
		add(orderBy?.name?.let(table.name::toOrderPair))
	}
}

fun IContainer.lazyRoleRepository() = lazy<RoleRepository>()
