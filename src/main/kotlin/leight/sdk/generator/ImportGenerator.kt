package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.IEndpoint
import leight.sdk.annotation.Module
import leight.sdk.annotation.TypeArrayClass
import leight.sdk.annotation.TypeClass
import leight.sdk.lazyClassExtractor
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation
import kotlin.reflect.full.memberProperties

class ImportGenerator(container: IContainer) : AbstractService(container) {
	private val classExtractor by container.lazyClassExtractor()

	private fun generateImport(klass: KClass<*>, module: Module): String {
		return "import {${klass.simpleName!!}} from \"@/sdk/${module.name}\""
	}

	private fun forClass(klass: KClass<*>, module: Module) = sequence {
		klass.findAnnotation<Module>()?.let { klassModule ->
			if (module.name != klassModule.name) {
				yield(module.name to generateImport(klass, klassModule))
			}
			klass.memberProperties.forEach { kProperty ->
				kProperty.findAnnotation<TypeClass>()?.let { typeClass ->
					typeClass.klass.findAnnotation<Module>()?.let { innerModule ->
						if (innerModule.name != klassModule.name) {
							yield(klassModule.name to generateImport(typeClass.klass, innerModule))
						}
					}
				}
				kProperty.findAnnotation<TypeArrayClass>()?.let { typeArrayClass ->
					typeArrayClass.target.klass.findAnnotation<Module>()?.let { innerModule ->
						if (innerModule.name != klassModule.name) {
							yield(klassModule.name to generateImport(typeArrayClass.target.klass, innerModule))
						}
					}
				}
			}
		}
	}

	private fun forTypeClass(typeClass: TypeClass, module: Module) = sequence {
		yieldAll(forClass(typeClass.klass, module))
		typeClass.types.forEach {
			yieldAll(forClass(it.klass, module))
		}
	}

	fun generate(endpoints: List<KClass<out IEndpoint>>) = sequence {
		val dependencies = mutableMapOf<String, MutableList<String>>()

		classExtractor.toClassList(endpoints).forEach { classContext ->
			forTypeClass(classContext.typeClass, classContext.module).forEach { (module, source) -> dependencies.getOrPut(module) { mutableListOf() }.add(source) }
		}
		classExtractor.toExport(endpoints).forEach { exportContext ->
			forClass(exportContext.endpoint.request.klass, exportContext.module).forEach { (module, source) ->
				dependencies.getOrPut(module) { mutableListOf() }.add(source)
			}
			forClass(exportContext.endpoint.response.klass, exportContext.module).forEach { (module, source) ->
				dependencies.getOrPut(module) { mutableListOf() }.add(source)
			}
		}

		dependencies.forEach { (module, source) ->
			yield(module to source.distinct().joinToString("\n"))
		}
	}
}

fun IContainer.lazyImportGenerator() = lazy<ImportGenerator>()
