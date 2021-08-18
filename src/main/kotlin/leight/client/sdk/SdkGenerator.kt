package leight.client.sdk

import leight.client.sdk.property.SdkArrayProperty
import leight.client.sdk.property.SdkIndexProperty
import leight.client.sdk.property.SdkLiteralProperty
import leight.container.AbstractService
import leight.container.IContainer
import leight.http.IHttpIndex
import leight.rest.Endpoint
import leight.rest.EndpointMethod
import leight.rest.IEndpoint
import leight.rest.IEndpointInfo
import kotlin.reflect.KClass
import kotlin.reflect.KProperty
import kotlin.reflect.full.findAnnotation
import kotlin.reflect.full.memberProperties

class SdkGenerator(container: IContainer) : AbstractService(container), ISdkGenerator {
	private val httpIndex by container.lazy<IHttpIndex>()
	private val endpointInfo by container.lazy<IEndpointInfo>()

	private fun filter(string: String): String = string
		.replace("api.", "")
		.replace("dto.", "")
		.replace("module.", "")
		.replace("endpoint.", "")
		.replace("Endpoint", "")

	private fun namespaceName(klass: KClass<*>): String = filter(klass.qualifiedName!!).replace("." + klass.simpleName!!.replace("Endpoint", ""), "")

	private fun resolveClassName(source: KClass<*>, target: KClass<*>): String = filter(target.qualifiedName!!).replace(namespaceName(source) + ".", "")

	private fun exportProperty(klass: KClass<*>, property: KProperty<*>): String {
		var type = "any"
		property.findAnnotation<SdkLiteralProperty>()?.let {
			type = it.export
		}
		property.findAnnotation<SdkArrayProperty>()?.let {
			type = filter(it.target.qualifiedName!!).replace(namespaceName(klass) + ".", "") + "[]"
		}
		property.findAnnotation<SdkIndexProperty>()?.let {
			type = "{ [index in string]: " + resolveClassName(klass, it.target) + " }"
		}
		return property.name + ": " + type
	}

	private fun exportClass(klass: KClass<*>): String {
		return """export interface ${klass.simpleName!!} {
		${klass.memberProperties.joinToString("\n\t\t") { "${exportProperty(klass, it)};" }}
	}"""
	}

	private fun extractClasses(klass: KClass<*>): Array<KClass<*>> {
		var classes = arrayOf(klass)
		klass.memberProperties.forEach { property ->
			property.findAnnotation<SdkArrayProperty>()?.let {
				classes += it.target
				classes += extractClasses(it.target)
			}
			property.findAnnotation<SdkIndexProperty>()?.let {
				classes += it.target
				classes += extractClasses(it.target)
			}
		}
		return classes
	}

	private fun exportInterfaces(endpoints: List<KClass<out IEndpoint>>): String {
		var output = "import {Server, IDiscoveryIndex} from \"@leight-core/leight\";\n\n"

		var classes = arrayOf<KClass<*>>()
		val namespaces = mutableMapOf<String, MutableList<String>>()

		endpoints.forEach { endpoint ->
			endpoint.findAnnotation<Sdk>()?.let { sdk ->
				classes += extractClasses(sdk.response)
				if (sdk.request !== Unit::class) {
					classes += extractClasses(sdk.request)
				}
				endpoint.findAnnotation<Endpoint>()?.let { annotation ->
					endpoint.findAnnotation<Sdk>()?.let { sdk ->
						namespaces[namespaceName(endpoint)] = (namespaces[namespaceName(endpoint)] ?: mutableListOf()).also { namespace ->
							when (annotation.method) {
								EndpointMethod.GET -> {
									namespace += "export const do" + filter(endpoint.simpleName!!) + "Fetch = Server.createGet<${
										filter(sdk.response.qualifiedName!!).replace(
											namespaceName(endpoint) + ".",
											""
										)
									}>(\"${endpointInfo.getId(endpoint)}\");"
								}
								EndpointMethod.POST -> {
									namespace += "export const do" + filter(endpoint.simpleName!!) + " = Server.createPost<${
										filter(sdk.request.qualifiedName!!).replace(
											namespaceName(endpoint) + ".",
											""
										)
									}, ${
										filter(sdk.response.qualifiedName!!).replace(
											namespaceName(endpoint) + ".",
											""
										)
									}>(\"${endpointInfo.getId(endpoint)}\");"
								}
							}
						}
					}
				}
			}
		}

		val distinctClasses = classes.distinct()
		distinctClasses.forEach { klass ->
			namespaces[namespaceName(klass)] = (namespaces[namespaceName(klass)] ?: mutableListOf()).also { namespace ->
				namespace += exportClass(klass)
			}
		}

		namespaces.forEach { (t, u) ->
			output += """export namespace $t {
	${u.joinToString("\n\n\t")}
}

"""
		}

		return output
	}

	override fun generate(endpoints: List<KClass<out IEndpoint>>): String {
		return arrayOf(
			exportInterfaces(endpoints),
		).joinToString("")
	}

	override fun generate(): String = generate(httpIndex.endpoints().map { entry -> entry.value })
}
