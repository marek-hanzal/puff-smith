package ps.mod.mapper

import leight.container.IContainer
import leight.mapper.AbstractMapper
import ps.mod.dto.ModDto
import ps.storage.module.mod.entity.ModEntity
import ps.storage.module.user.repository.lazyUserRepository
import ps.user.mapper.lazyUserMapper

class ModMapper(container: IContainer) : AbstractMapper<ModEntity, ModDto>(container) {
	private val userRepository by container.lazyUserRepository()
	private val userMapper by container.lazyUserMapper()

	override fun map(item: ModEntity) = ModDto.build {
		id = item.id
		name = item.name
		code = item.code
		approvedBy = item.approvedBy?.let { userMapper.map(userRepository.find(it)) }
	}
}

fun IContainer.lazyModMapper() = lazy<ModMapper>()
