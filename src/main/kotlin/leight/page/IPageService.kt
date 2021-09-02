package leight.page

import io.ktor.application.*
import leight.container.IContainer
import leight.mapper.IMapper
import leight.page.dto.PageResponseDto
import leight.repository.EntityFilter
import leight.repository.IRepository
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable

/**
 * Service used for (clever) paging support over collections.
 */
interface IPageService {
	suspend fun <TTable : UUIDTable, TEntity : UUIDEntity, TOrderBy : Any, TResult> page(
		call: ApplicationCall,
		repository: IRepository<TTable, TEntity, TOrderBy>,
		mapper: IMapper<TEntity, TResult>,
		filter: EntityFilter<TEntity>? = null
	): PageResponseDto<TResult>
}

fun IContainer.lazyPageService() = lazy<IPageService>()
