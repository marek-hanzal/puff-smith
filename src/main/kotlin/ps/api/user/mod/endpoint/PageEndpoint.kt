package ps.api.user.mod.endpoint

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
import ps.mod.dto.ModDto
import ps.mod.mapper.lazyModMapper
import ps.storage.module.mod.dto.ModFilterDto
import ps.storage.module.mod.dto.ModOrderByDto
import ps.storage.module.mod.repository.lazyModRepository

@Endpoint(
	method = EndpointMethod.POST,
	request = TypeClass(
		PageRequestDto::class,
		[
			TypeClass(ModOrderByDto::class),
			TypeClass(ModFilterDto::class),
		],
	),
	response = TypeClass(
		PageResponseDto::class, [
			TypeClass(ModDto::class),
		]
	),
)
@Data(
	item = ModDto::class,
	orderBy = ModOrderByDto::class,
	filter = ModFilterDto::class,
)
@Module("user/mod")
class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val modRepository by container.lazyModRepository()
	private val modMapper by container.lazyModMapper()

	override suspend fun handle(call: ApplicationCall): Response<*> = call.page(modRepository, modMapper)
}
