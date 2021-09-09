package ps.api.user.atomizer.endpoint

import io.ktor.application.*
import leight.sdk.annotation.Data
import leight.client.sdk.annotation.TypeClass
import leight.container.IContainer
import leight.page.dto.PageRequestDto
import leight.page.dto.PageResponseDto
import leight.rest.AbstractPageEndpoint
import leight.rest.Endpoint
import leight.rest.EndpointMethod
import leight.rest.Response
import leight.sdk.annotation.Module
import ps.atomizer.dto.AtomizerDto
import ps.atomizer.mapper.lazyAtomizerMapper
import ps.storage.module.atomizer.dto.AtomizerFilterDto
import ps.storage.module.atomizer.dto.AtomizerOrderByDto
import ps.storage.module.atomizer.repository.lazyAtomizerRepository

@Endpoint(
	method = EndpointMethod.POST,
	request = TypeClass(
		PageRequestDto::class,
		[
			TypeClass(AtomizerOrderByDto::class),
			TypeClass(AtomizerFilterDto::class),
		],
	),
	response = TypeClass(
		PageResponseDto::class, [
			TypeClass(AtomizerDto::class),
		]
	),
)
@Data(
	item = AtomizerDto::class,
	orderBy = AtomizerOrderByDto::class,
	filter = AtomizerFilterDto::class,
)
@Module("user/atomizer")
class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val atomizerRepository by container.lazyAtomizerRepository()
	private val atomizerMapper by container.lazyAtomizerMapper()

	override suspend fun handle(call: ApplicationCall): Response<*> = call.page(atomizerRepository, atomizerMapper)
}
