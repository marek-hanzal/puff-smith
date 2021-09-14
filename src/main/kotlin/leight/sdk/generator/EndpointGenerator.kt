package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.EndpointMethod
import leight.rest.lazyEndpointInfo
import leight.sdk.lazyNameResolver
import leight.sdk.utils.ExportContext

class EndpointGenerator(container: IContainer) : AbstractService(container) {
	private val endpointInfo by container.lazyEndpointInfo()
	private val nameResolver by container.lazyNameResolver()
	private val typeGenerator by container.lazyTypeGenerator()

	fun generate(exportContext: ExportContext): String = nameResolver.simpleName(exportContext.klazz).let { name ->
		val request = typeGenerator.resolve(exportContext.endpoint.request)
		val response = typeGenerator.resolve(exportContext.endpoint.response)
		val id = endpointInfo.getId(exportContext.klazz)
		val pair = "$request, $response"

		when (exportContext.endpoint.method) {
			EndpointMethod.GET -> {
				"export const do${name} = createGet<$response>(\"$id\")"
			}
			EndpointMethod.POST -> {
				"export const do${name} = createPost<$pair>(\"$id\")"
			}
			EndpointMethod.PATCH -> {
				"export const do${name} = createPatch<$pair>(\"$id\")"
			}
			EndpointMethod.PUT -> {
				"export const do${name} = createPut<$pair>(\"$id\")"
			}
			EndpointMethod.DELETE -> {
				"export const do${name} = createDelete<$response>(\"$id\")"
			}
		}.let { "$it;" }
	}
}

fun IContainer.lazyEndpointGenerator() = lazy<EndpointGenerator>()
