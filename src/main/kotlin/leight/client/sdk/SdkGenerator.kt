package leight.client.sdk

import leight.client.sdk.extractor.NamespaceExtractor
import leight.container.AbstractService
import leight.container.IContainer
import leight.http.IHttpIndex
import leight.rest.IEndpoint
import kotlin.reflect.KClass

class SdkGenerator(container: IContainer) : AbstractService(container), ISdkGenerator {
	private val httpIndex by container.lazy<IHttpIndex>()
	private val sdkExtractor by container.lazy<SdkClassExtractor>()
	private val namespaceExtractor by container.lazy<NamespaceExtractor>()

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

	override fun generate(endpoints: List<KClass<out IEndpoint>>): String {
		val aaa = sdkExtractor.extractSdkClasses(endpoints)

//		namespaceExtractor.from()

		return arrayOf(
			"import {Server, IDiscoveryIndex} from \"@leight-core/leight\";\n\n",
//			exportInterfaces(endpoints),
		).joinToString("")
	}

	override fun generate(): String = generate(httpIndex.endpoints().map { entry -> entry.value })
}
