package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.EndpointMethod
import leight.rest.IEndpoint
import leight.sdk.SdkException
import leight.sdk.annotation.Data
import leight.sdk.annotation.Module
import leight.sdk.annotation.TypeArrayClass
import leight.sdk.annotation.TypeClass
import leight.sdk.lazyClassExtractor
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation
import kotlin.reflect.full.memberProperties

class ImportGenerator(container: IContainer) : AbstractService(container) {
	private val classExtractor by container.lazyClassExtractor()

	private fun generateImport(target: KClass<*>): String {
		return "import {${target.simpleName!!}} from \"@/sdk/${target.findAnnotation<Module>()?.name ?: throw SdkException("Class [${target.simpleName!!}] does not have Module annotation!")}\""
	}

	private fun importLeight(what: String) = "import {$what} from \"@leight-core/leight\";"

	private fun toYield(klass: KClass<*>, sourceModule: Module) = sequence {
		klass.findAnnotation<Module>()?.let { module ->
			if (module.name != sourceModule.name) {
				yield(sourceModule.name to generateImport(klass))
			}
		}
	}

	private fun forClass(klass: KClass<*>) = sequence {
		klass.findAnnotation<Module>()?.let { klassModule ->
			klass.memberProperties.forEach { kProperty ->
				kProperty.findAnnotation<TypeClass>()?.let { typeClass ->
					yieldAll(toYield(typeClass.klass, klassModule))
				}
				kProperty.findAnnotation<TypeArrayClass>()?.let { typeArrayClass ->
					yieldAll(toYield(typeArrayClass.target.klass, klassModule))
				}
			}
		}
	}

	private fun forTypeClass(typeClass: TypeClass) = sequence {
		yieldAll(forClass(typeClass.klass))
		typeClass.types.forEach {
			yieldAll(forClass(it.klass))
		}
	}

	fun generate(endpoints: List<KClass<out IEndpoint>>) = sequence {
		val dependencies = mutableMapOf<String, MutableList<String>>()

		classExtractor.toExport(endpoints).forEach { exportContext ->
			exportContext.klazz.findAnnotation<Data>()?.let { data ->
				dependencies.getOrPut(exportContext.module.name) { mutableListOf() }.apply {
					add("import {FC} from \"react\";")
					add(importLeight("useDataContext, IDataContextProviderProps, DataContextProvider, ISearchSelectProps, SearchSelect"))
				}
			}
		}
		classExtractor.toExport(endpoints).forEach { exportContext ->
			when (exportContext.endpoint.method) {
				EndpointMethod.POST -> dependencies.getOrPut(exportContext.module.name) { mutableListOf() }.add(importLeight("createPost"))
				EndpointMethod.GET -> dependencies.getOrPut(exportContext.module.name) { mutableListOf() }.add(importLeight("createGet"))
				EndpointMethod.PUT -> dependencies.getOrPut(exportContext.module.name) { mutableListOf() }.add(importLeight("createPut"))
				EndpointMethod.DELETE -> dependencies.getOrPut(exportContext.module.name) { mutableListOf() }.add(importLeight("createDelete"))
				EndpointMethod.PATCH -> dependencies.getOrPut(exportContext.module.name) { mutableListOf() }.add(importLeight("createPatch"))
			}
		}
		classExtractor.toExport(endpoints).forEach { exportContext ->
			toYield(exportContext.endpoint.request.klass, exportContext.module).forEach { (module, source) -> dependencies.getOrPut(module) { mutableListOf() }.add(source) }
			forClass(exportContext.endpoint.request.klass).forEach { (module, source) ->
				dependencies.getOrPut(module) { mutableListOf() }.add(source)
			}
			toYield(exportContext.endpoint.response.klass, exportContext.module).forEach { (module, source) -> dependencies.getOrPut(module) { mutableListOf() }.add(source) }
			forClass(exportContext.endpoint.response.klass).forEach { (module, source) ->
				dependencies.getOrPut(module) { mutableListOf() }.add(source)
			}
		}
		classExtractor.toClassList(endpoints).forEach { classContext ->
			forTypeClass(classContext.typeClass).forEach { (module, source) -> dependencies.getOrPut(module) { mutableListOf() }.add(source) }
		}

		dependencies.forEach { (module, source) ->
			yield(module to source.distinct().joinToString("\n"))
		}
	}
}

fun IContainer.lazyImportGenerator() = lazy<ImportGenerator>()
