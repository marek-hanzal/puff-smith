package leight.page

import io.ktor.application.*
import io.ktor.request.*
import kotlinx.coroutines.runBlocking
import leight.container.AbstractService
import leight.container.IContainer
import leight.mapper.IMapper
import leight.page.dto.PageRequestDto
import leight.page.dto.PageResponseDto
import leight.repository.EntityFilter
import leight.repository.IRepository
import leight.storage.lazyStorage
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable

class PageService(container: IContainer) : AbstractService(container), IPageService {
	private val storage by container.lazyStorage()

	override suspend fun <TTable : UUIDTable, TEntity : UUIDEntity, TOrderBy : Any, TResult> page(
		call: ApplicationCall,
		repository: IRepository<TTable, TEntity, TOrderBy>,
		mapper: IMapper<TEntity, TResult>,
		filter: EntityFilter<TEntity>?
	): PageResponseDto<TResult> =
		page<TEntity, TOrderBy, TResult>(call, { repository.total(filter) }, mapper, { pageRequestDto, block ->
			repository.page(pageRequestDto, block, filter)
		})

	fun <TEntity : UUIDEntity, TOrderBy : Any, TResult> page(call: ApplicationCall, total: () -> Long, mapper: IMapper<TEntity, TResult>, block: (PageRequestDto<TOrderBy>, (TEntity) -> Unit) -> Unit) = storage.read {
		PageResponseDto.build<TResult> {
			val pageRequestDto = runBlocking {
				val a = call.receive<PageRequestDto<TOrderBy>>()
				a
			}
			this.total = total()
			this.size = pageRequestDto.size
			block(pageRequestDto.validate(this@build.total)) { entity -> items.add(mapper.map(entity)) }
		}
	}
}
