package ps.api.user.atomizer.endpoint

import io.ktor.application.*
import leight.client.sdk.annotation.Sdk
import leight.client.sdk.annotation.TypeClass
import leight.container.IContainer
import leight.page.dto.PageRequestDto
import leight.page.dto.PageResponseDto
import leight.page.lazyPageService
import leight.rest.*
import ps.atomizer.dto.AtomizerDto
import ps.atomizer.mapper.lazyAtomizerMapper
import ps.storage.module.atomizer.repository.lazyAtomizerRepository

@Endpoint(
	method = EndpointMethod.POST,
)
@Sdk(
	request = TypeClass(PageRequestDto::class),
	response = TypeClass(
		PageResponseDto::class, [
			TypeClass(AtomizerDto::class),
		]
	),
)
class PageEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val pageService by container.lazyPageService()
	private val atomizerRepository by container.lazyAtomizerRepository()
	private val atomizerMapper by container.lazyAtomizerMapper()

	override suspend fun handle(call: ApplicationCall): Response<*> {
		return ok(pageService.page(call, atomizerRepository, atomizerMapper))
	}
}
