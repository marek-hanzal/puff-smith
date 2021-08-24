package ps.api.module.translation.endpoint

import io.ktor.application.*
import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.rest.*
import leight.storage.IStorage
import ps.api.module.translation.dto.index.IndexResponse
import ps.api.module.translation.dto.index.TranslationDto
import ps.storage.module.translation.repository.TranslationRepository

@Sdk(
	response = IndexResponse::class,
)
@Endpoint(
	public = true,
	method = EndpointMethod.GET,
)
class IndexEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val storage by container.lazy<IStorage>()
	private val translationRepository by container.lazy<TranslationRepository>()

	override suspend fun handle(call: ApplicationCall): Response<*> = ok(storage.read {
		IndexResponse(translationRepository.all().map {
			TranslationDto(it.language, it.label, it.text)
		})
	})
}
