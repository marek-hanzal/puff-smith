package ps.vendor.mapper

import leight.container.IContainer
import leight.mapper.AbstractMapper
import ps.storage.module.vendor.entity.VendorEntity
import ps.vendor.dto.VendorDto

class VendorMapper(container: IContainer) : AbstractMapper<VendorEntity, VendorDto>(container) {
	override fun map(item: VendorEntity) = VendorDto.build {
		id = item.id
		name = item.name
		code = item.code
	}
}

fun IContainer.lazyVendorMapper() = lazy<VendorMapper>()
