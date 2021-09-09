package leight.client.sdk

import leight.client.sdk.annotation.SdkData
import leight.client.sdk.generator.lazyDataContextGenerator
import leight.client.sdk.generator.lazyDataContextProviderGenerator
import leight.container.AbstractService
import leight.container.IContainer
import leight.http.lazyHttpIndex
import leight.rest.IEndpoint
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation

class SdkGenerator(container: IContainer) : AbstractService(container), ISdkGenerator {
	private val httpIndex by container.lazyHttpIndex()
	private val nameResolver by container.lazyNameResolver()
	private val dataContextGenerator by container.lazyDataContextGenerator()
	private val dataContextProviderGenerator by container.lazyDataContextProviderGenerator()

	private fun exportNamespacePart(namespacePart: NamespacePart, level: Int): String {
		return """${"\t".repeat(level)}export namespace ${namespacePart.name} {
${arrayOf<String?>(*namespacePart.exports.values.mapNotNull { it(level) }.toTypedArray(), *namespacePart.inner.values.map { exportNamespacePart(it, level + 1) }.toTypedArray()).joinToString("\n\n")}
${"\t".repeat(level)}}"""
	}

	override fun generate(endpoints: List<KClass<out IEndpoint>>): String {
		var export = arrayOf<String>()
		NamespaceIndex().let { namespaceIndex ->
			endpoints.filter { endpoint -> endpoint.findAnnotation<SdkData>() !== null }.map { klass ->
				namespaceIndex.export(nameResolver.namespaceParts(klass) + listOf("data"), klass.simpleName!! + ".data-context") { level ->
					dataContextGenerator.export(klass, level)
				}
				namespaceIndex.export(nameResolver.namespaceParts(klass) + listOf("data"), klass.simpleName!! + ".data-context-provider") { level ->
					dataContextProviderGenerator.export(klass, level)
				}
			}

			export += namespaceIndex.namespacePart.inner.values.joinToString("\n\n") { inner ->
				exportNamespacePart(inner, 0)
			}
		}
		return export.joinToString("\n")
	}

	override fun generate(): String = generate(httpIndex.endpoints().map { entry -> entry.value })
}
