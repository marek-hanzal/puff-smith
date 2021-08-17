package vapersdream.api.public.endpoint

import io.ktor.application.*
import leight.container.IContainer
import leight.rest.*
import vapersdream.api.public.dto.translation.TranslationResponse

@Endpoint(
	public = true,
	method = EndpointMethod.GET,
)
class TranslationEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override suspend fun handle(call: ApplicationCall): Response<*> = ok(TranslationResponse(arrayOf()))
}
