package leight.client.sdk

import leight.client.sdk.generator.lazyClassGenerator
import leight.client.sdk.generator.lazyEndpointGenerator
import leight.container.AbstractService
import leight.container.IContainer
import leight.http.lazyHttpIndex
import leight.rest.IEndpoint
import kotlin.reflect.KClass

class SdkGenerator(container: IContainer) : AbstractService(container), ISdkGenerator {
	private val httpIndex by container.lazyHttpIndex()
	private val classExtractor by container.lazyClassExtractor()
	private val nameResolver by container.lazyNameResolver()
	private val classGenerator by container.lazyClassGenerator()
	private val endpointGenerator by container.lazyEndpointGenerator()

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
			classExtractor.extractSdkClasses(endpoints).map { sdkType ->
				namespaceIndex.ensure(nameResolver.namespaceParts(sdkType.klass), sdkType.klass.simpleName!!) { level ->
					classGenerator.exportClass(sdkType, level)
				}
			}
			classExtractor.sdkClasses(endpoints) { sdk, endpoint, klass ->
				namespaceIndex.ensure(nameResolver.namespaceParts(klass), klass.simpleName!! + ".method") { level ->
					endpointGenerator.exportMethod(sdk, endpoint, klass, level)
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
