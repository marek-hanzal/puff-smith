package ps.mod.mapper

import leight.container.IContainer
import leight.mapper.AbstractMapper
import ps.mod.dto.ModDto
import ps.storage.module.mod.entity.ModEntity
import ps.storage.module.user.repository.lazyUserRepository
import ps.storage.module.vendor.repository.lazyVendorRepository
import ps.user.mapper.lazyUserMapper
import ps.vendor.mapper.lazyVendorMapper

class ModMapper(container: IContainer) : AbstractMapper<ModEntity, ModDto>(container) {
	private val userRepository by container.lazyUserRepository()
	private val userMapper by container.lazyUserMapper()
	private val vendorRepository by container.lazyVendorRepository()
	private val vendorMapper by container.lazyVendorMapper()

	override fun map(item: ModEntity) = ModDto.build {
		id = item.id
		name = item.name
		code = item.code
		power = item.power
		vendor = vendorMapper.map(vendorRepository.find(item.vendor))
		approvedBy = item.approvedBy?.let { userMapper.map(userRepository.find(it)) }
	}
}

fun IContainer.lazyModMapper() = lazy<ModMapper>()
