package leight.client.sdk.generator

import leight.client.sdk.annotation.Sdk
import leight.client.sdk.lazyNameResolver
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.Endpoint
import leight.rest.EndpointMethod
import leight.rest.IEndpoint
import leight.rest.lazyEndpointInfo
import kotlin.reflect.KClass

class EndpointGenerator(container: IContainer) : AbstractService(container) {
	private val nameResolver by container.lazyNameResolver()
	private val endpointInfo by container.lazyEndpointInfo()
	private val genericGenerator by container.lazyGenericGenerator()

	fun exportMethod(sdk: Sdk, endpoint: Endpoint, klass: KClass<out IEndpoint>, level: Int): String = when (endpoint.method) {
		EndpointMethod.GET -> {
			"export const do" + nameResolver.filterName(klass.simpleName!!) + "Fetch = createGet<${
				nameResolver.resolveClassName(
					klass,
					sdk.response.klass
				)
			}${genericGenerator.exportExpandedTypes(sdk.response)}>(\"${endpointInfo.getId(klass)}\")"
		}
		EndpointMethod.POST -> {
			"export const do" + nameResolver.filterName(klass.simpleName!!) + " = createPost<${nameResolver.resolveClassName(klass, sdk.request.klass)}${genericGenerator.exportExpandedTypes(sdk.request)}, ${
				nameResolver.resolveClassName(
					klass,
					sdk.response.klass
				)
			}${genericGenerator.exportExpandedTypes(sdk.response)}>(\"${endpointInfo.getId(klass)}\")"
		}
		EndpointMethod.PATCH -> {
			"export const do" + nameResolver.filterName(klass.simpleName!!) + " = createPatch<${nameResolver.resolveClassName(klass, sdk.request.klass)}${genericGenerator.exportExpandedTypes(sdk.request)}, ${
				nameResolver.resolveClassName(
					klass,
					sdk.response.klass
				)
			}${genericGenerator.exportExpandedTypes(sdk.response)}>(\"${endpointInfo.getId(klass)}\")"
		}
		EndpointMethod.PUT -> {
			"export const do" + nameResolver.filterName(klass.simpleName!!) + " = createPut<${nameResolver.resolveClassName(klass, sdk.request.klass)}${genericGenerator.exportExpandedTypes(sdk.request)}, ${
				nameResolver.resolveClassName(
					klass,
					sdk.response.klass
				)
			}${genericGenerator.exportExpandedTypes(sdk.response)}>(\"${endpointInfo.getId(klass)}\")"
		}
		EndpointMethod.DELETE -> {
			"export const do" + nameResolver.filterName(klass.simpleName!!) + " = createDelete<${
				nameResolver.resolveClassName(
					klass,
					sdk.response.klass
				)
			}${genericGenerator.exportExpandedTypes(sdk.response)}>(\"${endpointInfo.getId(klass)}\")"
		}
	}.let { return "\t".repeat(level + 1) + it + ";" }
}

fun IContainer.lazyEndpointGenerator() = lazy<EndpointGenerator>()
