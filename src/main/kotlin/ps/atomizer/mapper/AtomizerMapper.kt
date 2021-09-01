package ps.atomizer.mapper

import leight.container.IContainer
import leight.mapper.AbstractMapper
import ps.atomizer.dto.AtomizerDto
import ps.storage.module.atomizer.entity.AtomizerEntity

class AtomizerMapper(container: IContainer) : AbstractMapper<AtomizerEntity, AtomizerDto>(container) {
	override fun map(item: AtomizerEntity) = AtomizerDto.build {
		name = item.name
	}
}

fun IContainer.lazyAtomizerMapper() = lazy<AtomizerMapper>()
