package ps.role.mapper

import leight.container.IContainer
import leight.mapper.AbstractMapper
import ps.role.dto.RoleDto
import ps.storage.module.role.entity.RoleEntity

class RoleMapper(container: IContainer) : AbstractMapper<RoleEntity, RoleDto>(container) {
	override fun map(item: RoleEntity) = RoleDto.build {
		id = item.id
		name = item.name
	}
}

fun IContainer.lazyRoleMapper() = lazy<RoleMapper>()
