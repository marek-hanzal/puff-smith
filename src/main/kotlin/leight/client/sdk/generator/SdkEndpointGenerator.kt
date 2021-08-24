package leight.client.sdk.generator

import leight.client.sdk.Sdk
import leight.client.sdk.lazySdkNameResolver
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.Endpoint
import leight.rest.EndpointMethod
import leight.rest.IEndpoint
import leight.rest.lazyEndpointInfo
import kotlin.reflect.KClass

class SdkEndpointGenerator(container: IContainer) : AbstractService(container) {
	private val sdkNameResolver by container.lazySdkNameResolver()
	private val endpointInfo by container.lazyEndpointInfo()

	fun exportMethod(sdk: Sdk, endpoint: Endpoint, klass: KClass<out IEndpoint>, level: Int): String? = when (endpoint.method) {
		EndpointMethod.GET -> {
			"export const do" + sdkNameResolver.filterName(klass.simpleName!!) + "Fetch = Server.createGet<${sdkNameResolver.resolveClassName(klass, sdk.response)}>(\"${endpointInfo.getId(klass)}\")"
		}
		EndpointMethod.POST -> {
			"export const do" + sdkNameResolver.filterName(klass.simpleName!!) + " = Server.createPost<${sdkNameResolver.resolveClassName(klass, sdk.request)}, ${
				sdkNameResolver.resolveClassName(
					klass,
					sdk.response
				)
			}>(\"${endpointInfo.getId(klass)}\")"
		}
		EndpointMethod.DELETE -> {
			"export const do" + sdkNameResolver.filterName(klass.simpleName!!) + " = Server.createDelete<${sdkNameResolver.resolveClassName(klass, sdk.response)}>(\"${endpointInfo.getId(klass)}\")"
		}
		else -> null
	}?.let { return "\t".repeat(level + 1) + it + ";\n" }
}

fun IContainer.lazySdkEndpointGenerator() = lazy<SdkEndpointGenerator>()
