package leight.client.sdk.generator

import leight.client.sdk.Sdk
import leight.client.sdk.SdkNameResolver
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.Endpoint
import leight.rest.EndpointMethod
import leight.rest.IEndpoint
import leight.rest.IEndpointInfo
import kotlin.reflect.KClass

class SdkEndpointGenerator(container: IContainer) : AbstractService(container) {
	private val sdkNameResolver by container.lazy<SdkNameResolver>()
	private val endpointInfo by container.lazy<IEndpointInfo>()

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
		else -> null
	}?.let { return "\t".repeat(level + 1) + it + ";\n" }
}
