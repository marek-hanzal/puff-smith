package ps.atomizer.mapper

import leight.container.IContainer
import leight.mapper.AbstractMapper
import ps.atomizer.dto.AtomizerDto
import ps.storage.module.atomizer.entity.AtomizerEntity
import ps.storage.module.vendor.repository.lazyVendorRepository
import ps.vendor.mapper.lazyVendorMapper

class AtomizerMapper(container: IContainer) : AbstractMapper<AtomizerEntity, AtomizerDto>(container) {
	private val vendorMapper by container.lazyVendorMapper()
	private val vendorRepository by container.lazyVendorRepository()

	override fun map(item: AtomizerEntity) = AtomizerDto.build {
		id = item.id
		name = item.name
		code = item.code
		vendor = vendorMapper.map(vendorRepository.find(item.vendor.value))
		coils = item.coils
		maxCoilSize = item.maxCoilSize
		maxWraps = item.maxWraps
		capacity = item.capacity
		base = item.base
		squonk = item.squonk
	}
}

fun IContainer.lazyAtomizerMapper() = lazy<AtomizerMapper>()
