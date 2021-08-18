package leight.client.sdk

import leight.client.sdk.generator.SdkClassGenerator
import leight.client.sdk.generator.SdkEndpointGenerator
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
	private val sdkEndpointGenerator by container.lazy<SdkEndpointGenerator>()

	private fun exportNamespacePart(namespacePart: NamespacePart, level: Int): String {
		return """${"\t".repeat(level)}export namespace ${namespacePart.name} {
${namespacePart.parts.values.mapNotNull { it(level) }.joinToString("\n\n") + namespacePart.inner.values.joinToString("\n\n") { exportNamespacePart(it, level + 1) }}
${"\t".repeat(level)}}"""
	}

	override fun generate(endpoints: List<KClass<out IEndpoint>>): String {
		var export = arrayOf<String>()
		export += "import {Server, IDiscoveryIndex} from \"@leight-core/leight\";\n\n"
		NamespaceIndex().let { namespaceIndex ->
			sdkExtractor.extractSdkClasses(endpoints).map { klass ->
				namespaceIndex.ensure(sdkNameResolver.namespaceParts(klass), klass.simpleName!!) { level ->
					sdkClassGenerator.exportClass(klass, level)
				}
			}
			sdkExtractor.sdkClasses(endpoints) { sdk, endpoint, klass ->
				namespaceIndex.ensure(sdkNameResolver.namespaceParts(klass), klass.simpleName!! + ".method") { level ->
					sdkEndpointGenerator.exportMethod(sdk, endpoint, klass, level)
				}
			}

			namespaceIndex.namespacePart.inner.values.forEach { inner ->
				export += exportNamespacePart(inner, 0)
			}
		}
		return export.joinToString("")
	}

	override fun generate(): String = generate(httpIndex.endpoints().map { entry -> entry.value })
}
