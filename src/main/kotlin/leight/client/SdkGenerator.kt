package leight.client

import leight.container.AbstractService
import leight.container.IContainer
import leight.http.IHttpIndex
import leight.rest.IEndpoint
import leight.rest.IEndpointInfo
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation

class SdkGenerator(container: IContainer) : AbstractService(container), ISdkGenerator {
	private val httpIndex by container.lazy<IHttpIndex>()
	private val endpointInfo by container.lazy<IEndpointInfo>()

	fun exportInterfaces(endpoints: List<KClass<out IEndpoint>>): String {
		var output = ""

		endpoints.forEach { endpoint ->
			endpoint.findAnnotation<Sdk>()?.let {
				output += endpointInfo.getId(endpoint) + "\n"
			}
		}

		return output
	}

	override fun generate(endpoints: List<KClass<out IEndpoint>>): String {
		return arrayOf(
			exportInterfaces(endpoints),
		).joinToString("\n")
	}

	override fun generate(): String = generate(httpIndex.endpoints().map { entry -> entry.value })
}
