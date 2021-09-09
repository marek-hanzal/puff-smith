package leight.sdk.generator

import leight.client.sdk.annotation.TypeArrayClass
import leight.client.sdk.annotation.TypeClass
import leight.container.AbstractService
import leight.container.IContainer
import leight.sdk.annotation.Module
import leight.sdk.utils.ClassContext
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation
import kotlin.reflect.full.memberProperties

class ImportGenerator(container: IContainer) : AbstractService(container) {
	private fun generateImport(klass: KClass<*>, module: Module): String {
		return "import {${klass.simpleName!!}} from \"@/sdk/${module.name}\""
	}

	private fun forClass(klass: KClass<*>) = sequence {
		klass.findAnnotation<Module>()?.let { module ->
			klass.memberProperties.forEach { kProperty ->
				kProperty.findAnnotation<TypeClass>()?.let { typeClass ->
					typeClass.klass.findAnnotation<Module>()?.let { innerModule ->
						if (innerModule.name != module.name) {
							yield(module.name to generateImport(typeClass.klass, innerModule))
						}
					}
				}
				kProperty.findAnnotation<TypeArrayClass>()?.let { typeArrayClass ->
					typeArrayClass.target.klass.findAnnotation<Module>()?.let { innerModule ->
						if (innerModule.name != module.name) {
							yield(module.name to generateImport(typeArrayClass.target.klass, innerModule))
						}
					}
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

	fun generate(classList: Sequence<ClassContext>) = sequence {
		val dependencies = mutableMapOf<String, MutableList<String>>()

		classList.forEach { classContext ->
			forClass(classContext.klazz).forEach { (module, source) -> dependencies.getOrPut(module) { mutableListOf() }.add(source) }
			forTypeClass(classContext.endpoint.request).forEach { (module, source) -> dependencies.getOrPut(module) { mutableListOf() }.add(source) }
			forTypeClass(classContext.endpoint.response).forEach { (module, source) -> dependencies.getOrPut(module) { mutableListOf() }.add(source) }
		}

		dependencies.forEach { (module, source) ->
			yield(module to source.distinct().joinToString("\n"))
		}
	}
}

fun IContainer.lazyImportGenerator() = lazy<ImportGenerator>()
