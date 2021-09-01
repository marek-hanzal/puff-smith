package ps.user.mapper

import leight.container.IContainer
import leight.mapper.AbstractMapper
import ps.api.module.session.dto.SessionDto
import ps.api.module.user.dto.UserDto
import ps.storage.module.user.entity.UserEntity

class UserToSessionMapper(container: IContainer) : AbstractMapper<UserEntity, SessionDto>(container) {
	override fun map(item: UserEntity): SessionDto {
		return SessionDto(UserDto(item.id.value, item.site ?: "locked", listOf()))
	}
}

fun IContainer.lazyUserToSessionMapper() = lazy<UserToSessionMapper>()
