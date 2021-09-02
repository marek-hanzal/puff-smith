package ps.user.mapper

import leight.container.IContainer
import leight.mapper.AbstractMapper
import ps.session.dto.SessionDto
import ps.storage.module.user.entity.UserEntity
import ps.user.dto.UserDto

class UserToSessionMapper(container: IContainer) : AbstractMapper<UserEntity, SessionDto>(container) {
	private val userMapper by container.lazyUserMapper()

	override fun map(item: UserEntity) = SessionDto.build {
		user = userMapper.map(item)
	}

	fun public() = SessionDto.build {
		user = UserDto.build {
			name = "public"
			site = "public"
		}
	}
}

fun IContainer.lazyUserToSessionMapper() = lazy<UserToSessionMapper>()
