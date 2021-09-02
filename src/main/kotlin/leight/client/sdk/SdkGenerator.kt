package leight.client.sdk

import leight.client.sdk.annotation.SdkDataSource
import leight.client.sdk.generator.lazyClassGenerator
import leight.client.sdk.generator.lazyDataSourceContextProviderGenerator
import leight.client.sdk.generator.lazyDataSourceGenerator
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
	private val dataSourceGenerator by container.lazyDataSourceGenerator()
	private val dataSourceContextProviderGenerator by container.lazyDataSourceContextProviderGenerator()

	private fun exportNamespacePart(namespacePart: NamespacePart, level: Int): String {
		return """${"\t".repeat(level)}export namespace ${namespacePart.name} {
${arrayOf<String?>(*namespacePart.parts.values.mapNotNull { it(level) }.toTypedArray(), *namespacePart.inner.values.map { exportNamespacePart(it, level + 1) }.toTypedArray()).joinToString("\n\n")}
${"\t".repeat(level)}}"""
	}

	override fun generate(endpoints: List<KClass<out IEndpoint>>): String {
		var export = arrayOf<String>()
		export += """
			import {FC} from "react";
			import {
				useDataSourceContext as useCoolDataSourceContext,
				DataSourceContextProvider as CoolDataSourceContextProvider,
				IDataSourceContextProviderProps as ICoolDataSourceContextProviderProps,
				createDelete,
				createGet,
				createPost,
				createPut,
				IDiscoveryIndex
			} from "@leight-core/leight";

		""".trimIndent()
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
			endpoints.filter { endpoint -> endpoint.findAnnotation<SdkDataSource>() !== null }.map { klass ->
				namespaceIndex.ensure(nameResolver.namespaceParts(klass) + listOf("datasource"), klass.simpleName!! + ".data-source-context") { level ->
					dataSourceGenerator.export(klass, level)
				}
				namespaceIndex.ensure(nameResolver.namespaceParts(klass) + listOf("datasource"), klass.simpleName!! + ".data-source-context-provider") { level ->
					dataSourceContextProviderGenerator.export(klass, level)
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
