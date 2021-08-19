package leight.repository

import org.jetbrains.exposed.dao.id.UUIDTable
import java.util.*

interface IRepository<TTable : UUIDTable> {
	fun find(uuid: UUID)
}
