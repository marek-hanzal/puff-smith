package leight.client.sdk

import leight.client.sdk.generator.lazySdkClassGenerator
import leight.client.sdk.generator.lazySdkEndpointGenerator
import leight.container.AbstractService
import leight.container.IContainer
import leight.http.lazyHttpIndex
import leight.rest.IEndpoint
import kotlin.reflect.KClass

class SdkGenerator(container: IContainer) : AbstractService(container), ISdkGenerator {
	private val httpIndex by container.lazyHttpIndex()
	private val sdkExtractor by container.lazySdkClassExtractor()
	private val sdkNameResolver by container.lazySdkNameResolver()
	private val sdkClassGenerator by container.lazySdkClassGenerator()
	private val sdkEndpointGenerator by container.lazySdkEndpointGenerator()

	private fun exportNamespacePart(namespacePart: NamespacePart, level: Int): String {
		return """${"\t".repeat(level)}export namespace ${namespacePart.name} {
${namespacePart.parts.values.mapNotNull { it(level) }.joinToString("\n\n") + namespacePart.inner.values.joinToString("\n\n") { exportNamespacePart(it, level + 1) }}
${"\t".repeat(level)}}
"""
	}

	override fun generate(endpoints: List<KClass<out IEndpoint>>): String {
		var export = arrayOf<String>()
		export += "import {createDelete, createGet, createPost, createPut, IDiscoveryIndex} from \"@leight-core/leight\";\n\n"
		NamespaceIndex().let { namespaceIndex ->
			sdkExtractor.extractSdkClasses(endpoints).map { sdkType ->
				namespaceIndex.ensure(sdkNameResolver.namespaceParts(sdkType.klass), sdkType.klass.simpleName!!) { level ->
					sdkClassGenerator.exportClass(sdkType, level)
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
		return export.joinToString("\n")
	}

	override fun generate(): String = generate(httpIndex.endpoints().map { entry -> entry.value })
}
