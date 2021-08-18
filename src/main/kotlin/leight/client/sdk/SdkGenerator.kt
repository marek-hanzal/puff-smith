package leight.client.sdk

import leight.client.sdk.generator.SdkClassGenerator
import leight.container.AbstractService
import leight.container.IContainer
import leight.http.IHttpIndex
import leight.rest.IEndpoint
import kotlin.reflect.KClass

class SdkGenerator(container: IContainer) : AbstractService(container), ISdkGenerator {
	private val httpIndex by container.lazy<IHttpIndex>()
	private val sdkExtractor by container.lazy<SdkClassExtractor>()
	private val sdkNameResolver by container.lazy<SdkNameResolver>()
	private val sdkClassGenerator by container.lazy<SdkClassGenerator>()

	private fun exportInterfaces(endpoints: List<KClass<out IEndpoint>>) {
//				if (sdk.request !== Unit::class) {
//					classes += extractClasses(sdk.request)
//				}
//				endpoint.findAnnotation<Endpoint>()?.let { annotation ->
//					endpoint.findAnnotation<Sdk>()?.let { sdk ->
//						namespaces[namespaceName(endpoint)] = (namespaces[namespaceName(endpoint)] ?: mutableListOf()).also { namespace ->
//							when (annotation.method) {
//								EndpointMethod.GET -> {
//									namespace += "export const do" + filter(endpoint.simpleName!!) + "Fetch = Server.createGet<${
//										filter(sdk.response.qualifiedName!!).replace(
//											namespaceName(endpoint) + ".",
//											""
//										)
//									}>(\"${endpointInfo.getId(endpoint)}\");"
//								}
//								EndpointMethod.POST -> {
//									namespace += "export const do" + filter(endpoint.simpleName!!) + " = Server.createPost<${
//										filter(sdk.request.qualifiedName!!).replace(
//											namespaceName(endpoint) + ".",
//											""
//										)
//									}, ${
//										filter(sdk.response.qualifiedName!!).replace(
//											namespaceName(endpoint) + ".",
//											""
//										)
//									}>(\"${endpointInfo.getId(endpoint)}\");"
//								}
//							}
//						}
//					}
//				}
//		distinctClasses.forEach { klass ->
//			namespaces[namespaceName(klass)] = (namespaces[namespaceName(klass)] ?: mutableListOf()).also { namespace ->
//				namespace += exportClass(klass)
//			}
//		}

//		namespaces.forEach { (t, u) ->
//			output += """export namespace $t {
//	${u.joinToString("\n\n\t")}
//}
//
//"""
	}

	private fun exportNamespacePart(namespacePart: NamespacePart, level: Int): String {
		return """${"\t".repeat(level)}export namespace ${namespacePart.name} {
${namespacePart.parts.values.joinToString("\n\n") { it(level) } + namespacePart.inner.values.joinToString("\n\n") { exportNamespacePart(it, level + 1) }}
${"\t".repeat(level)}}"""
	}

	override fun generate(endpoints: List<KClass<out IEndpoint>>): String {
		var export = arrayOf<String>()
		export += "import {Server, IDiscoveryIndex} from \"@leight-core/leight\";\n\n"
		NamespaceIndex().let { namespaceIndex ->
			sdkExtractor.extractSdkClasses(endpoints).map { klass ->
				namespaceIndex.ensure(sdkNameResolver.namespaceParts(klass), klass.simpleName!!) { level -> sdkClassGenerator.exportClass(klass, level) }
			}

			namespaceIndex.namespacePart.inner.values.forEach { inner ->
				export += exportNamespacePart(inner, 0)
			}
		}
		return export.joinToString("")
	}

	override fun generate(): String = generate(httpIndex.endpoints().map { entry -> entry.value })
}
