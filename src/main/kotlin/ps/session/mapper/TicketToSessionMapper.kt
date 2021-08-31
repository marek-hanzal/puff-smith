package ps.session.mapper

import leight.container.IContainer
import leight.mapper.AbstractMapper
import ps.api.module.session.dto.SessionDto
import ps.storage.module.session.entity.TicketEntity
import ps.user.mapper.lazyUserToSessionMapper

class TicketToSessionMapper(container: IContainer) : AbstractMapper<TicketEntity, SessionDto>(container) {
	private val userToSessionMapper by container.lazyUserToSessionMapper()

	override fun map(item: TicketEntity): SessionDto {
		return userToSessionMapper.map(item.user)
	}
}

fun IContainer.lazyTicketToSessionMapper() = lazy<TicketToSessionMapper>()
