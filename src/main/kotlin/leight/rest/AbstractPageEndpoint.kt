package leight.rest

import io.ktor.application.*
import io.ktor.request.*
import leight.container.IContainer
import leight.mapper.IMapper
import leight.repository.AbstractRepository
import leight.repository.toPageResponse
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable

/**
 * Basically marker class to quickly find all endpoints providing paging support.
 */
abstract class AbstractPageEndpoint(container: IContainer) : AbstractEndpoint(container) {
	suspend inline fun <TTable : UUIDTable, TEntity : UUIDEntity, reified TOrderBy : Any, reified TFilter : Any, TResult> ApplicationCall.page(
		repository: AbstractRepository<TTable, TEntity, TOrderBy, TFilter>,
		mapper: IMapper<TEntity, TResult>
	) =
		ok(repository.toPageResponse(receive(), mapper))
}
