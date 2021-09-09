package leight.client.sdk.generator

import leight.client.sdk.annotation.Sdk
import leight.client.sdk.lazyNameResolver
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.Endpoint
import leight.rest.IEndpoint
import leight.rest.lazyEndpointInfo
import kotlin.reflect.KClass

class EndpointGenerator(container: IContainer) : AbstractService(container) {
	private val nameResolver by container.lazyNameResolver()
	private val endpointInfo by container.lazyEndpointInfo()

	fun exportMethod(sdk: Sdk, endpoint: Endpoint, klass: KClass<out IEndpoint>, level: Int): String = nameResolver.filterName(klass.simpleName!!).let { name ->
		when (endpoint.method) {
//			EndpointMethod.GET -> {
//				"export const do${name}Fetch = createGet<${genericGenerator.exportExpandedClass(sdk.response)}>(\"${endpointInfo.getId(klass)}\")"
//			}
//			EndpointMethod.POST -> {
//				"export const do${name} = createPost<${genericGenerator.exportExpandedClass(sdk.request)}, ${genericGenerator.exportExpandedClass(sdk.response)}>(\"${
//					endpointInfo.getId(
//						klass
//					)
//				}\")"
//			}
//			EndpointMethod.PATCH -> {
//				"export const do${name} = createPatch<${genericGenerator.exportExpandedClass(sdk.request)}, ${genericGenerator.exportExpandedClass(sdk.response)}>(\"${
//					endpointInfo.getId(
//						klass
//					)
//				}\")"
//			}
//			EndpointMethod.PUT -> {
//				"export const do${name} = createPut<${genericGenerator.exportExpandedClass(sdk.request)}, ${genericGenerator.exportExpandedClass(sdk.response)}>(\"${
//					endpointInfo.getId(
//						klass
//					)
//				}\")"
//			}
//			EndpointMethod.DELETE -> {
//				"export const do${name} = createDelete<${genericGenerator.exportExpandedClass(sdk.response)}>(\"${endpointInfo.getId(klass)}\")"
//			}
			else -> {
				""
			}
		}.let { "\t".repeat(level + 1) + it + ";" }
	}
}

fun IContainer.lazyEndpointGenerator() = lazy<EndpointGenerator>()
