package ps.user.mapper

import leight.container.IContainer
import leight.mapper.AbstractMapper
import ps.role.mapper.lazyRoleMapper
import ps.storage.module.user.entity.UserEntity
import ps.user.dto.UserDto

class UserMapper(container: IContainer) : AbstractMapper<UserEntity, UserDto>(container) {
	private val roleMapper by container.lazyRoleMapper()

	override fun map(item: UserEntity) = UserDto.build {
		id = item.id
		name = item.name
		site = item.site ?: "locked"
		roles = item.roles.map(roleMapper::map)
	}
}

fun IContainer.lazyUserMapper() = lazy<UserMapper>()
