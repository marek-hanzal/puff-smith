package leight.repository

import leight.container.AbstractService
import leight.container.IContainer
import leight.storage.IStorage
import org.jetbrains.exposed.dao.id.UUIDTable

abstract class AbstractRepository<TTable : UUIDTable>(val table: TTable, container: IContainer) : AbstractService(container), IRepository<TTable> {
	protected val storage by container.lazy<IStorage>()
}
