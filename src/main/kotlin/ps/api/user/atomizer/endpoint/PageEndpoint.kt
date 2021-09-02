package ps.api.user.atomizer.endpoint

import io.ktor.application.*
import leight.client.sdk.annotation.Sdk
import leight.client.sdk.annotation.SdkDataSource
import leight.client.sdk.annotation.TypeClass
import leight.container.IContainer
import leight.page.dto.PageRequestDto
import leight.page.dto.PageResponseDto
import leight.rest.AbstractEndpoint
import leight.rest.Endpoint
import leight.rest.EndpointMethod
import leight.rest.Response
import ps.atomizer.dto.AtomizerDto
import ps.atomizer.mapper.lazyAtomizerMapper
import ps.storage.module.atomizer.repository.AtomizerOrderBy
import ps.storage.module.atomizer.repository.lazyAtomizerRepository

@Endpoint(
	method = EndpointMethod.POST,
)
@Sdk(
	request = TypeClass(
		PageRequestDto::class,
		[
			TypeClass(AtomizerOrderBy::class),
		],
	),
	response = TypeClass(
		PageResponseDto::class, [
			TypeClass(AtomizerDto::class),
		]
	),
)
@SdkDataSource(
	item = AtomizerDto::class,
	orderBy = AtomizerOrderBy::class,
)
class PageEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val atomizerRepository by container.lazyAtomizerRepository()
	private val atomizerMapper by container.lazyAtomizerMapper()

	override suspend fun handle(call: ApplicationCall): Response<*> = call.page(atomizerRepository, atomizerMapper)
}
