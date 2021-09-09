package leight.client.sdk

import leight.client.sdk.annotation.SdkData
import leight.client.sdk.generator.lazyClassGenerator
import leight.client.sdk.generator.lazyDataContextGenerator
import leight.client.sdk.generator.lazyDataContextProviderGenerator
import leight.client.sdk.generator.lazyEndpointGenerator
import leight.container.AbstractService
import leight.container.IContainer
import leight.http.lazyHttpIndex
import leight.rest.IEndpoint
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation

class SdkGenerator(container: IContainer) : AbstractService(container), ISdkGenerator {
	private val httpIndex by container.lazyHttpIndex()
	private val classExtractor by container.lazyClassExtractor()
	private val nameResolver by container.lazyNameResolver()
	private val classGenerator by container.lazyClassGenerator()
	private val endpointGenerator by container.lazyEndpointGenerator()
	private val dataContextGenerator by container.lazyDataContextGenerator()
	private val dataContextProviderGenerator by container.lazyDataContextProviderGenerator()

	private fun exportNamespacePart(namespacePart: NamespacePart, level: Int): String {
		return """${"\t".repeat(level)}export namespace ${namespacePart.name} {
${arrayOf<String?>(*namespacePart.exports.values.mapNotNull { it(level) }.toTypedArray(), *namespacePart.inner.values.map { exportNamespacePart(it, level + 1) }.toTypedArray()).joinToString("\n\n")}
${"\t".repeat(level)}}"""
	}

	override fun generate(endpoints: List<KClass<out IEndpoint>>): String {
		var export = arrayOf<String>()
		export += """
			import {FC} from "react";
			import {
				useDataContext as useCoolDataContext,
				DataContextProvider as CoolDataContextProvider,
				IDataContextProviderProps as ICoolDataContextProviderProps,
				createDelete,
				createGet,
				createPost,
				createPut,
				IDiscoveryIndex
			} from "@leight-core/leight";

		""".trimIndent()
		NamespaceIndex().let { namespaceIndex ->
			classExtractor.extractSdkClasses(endpoints).map { typeClass ->
				namespaceIndex.export(nameResolver.namespaceParts(typeClass.klass), typeClass.klass.simpleName!!) { level ->
					classGenerator.exportClass(typeClass, level)
				}
			}
			classExtractor.sdkClasses(endpoints) { sdk, endpoint, klass ->
				namespaceIndex.export(nameResolver.namespaceParts(klass), klass.simpleName!! + ".method") { level ->
					endpointGenerator.exportMethod(sdk, endpoint, klass, level)
				}
			}
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
