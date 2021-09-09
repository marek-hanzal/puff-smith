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

	fun generate(classList: Sequence<ClassContext>) = sequence {
		val dependencies = mutableMapOf<String, MutableList<String>>()

		classList.forEach { classContext ->
			classContext.typeClass.klass.memberProperties.forEach { kProperty ->
				kProperty.findAnnotation<TypeClass>()?.let { typeClass ->
					typeClass.klass.findAnnotation<Module>()?.let { module ->
						if (module.name != classContext.module.name) {
							dependencies.getOrPut(classContext.module.name) { mutableListOf() }.add(generateImport(typeClass.klass, module))
						}
					}
				}
				kProperty.findAnnotation<TypeArrayClass>()?.let { typeArrayClass ->
					typeArrayClass.target.klass.findAnnotation<Module>()?.let { module ->
						if (module.name != classContext.module.name) {
							dependencies.getOrPut(classContext.module.name) { mutableListOf() }.add(generateImport(typeArrayClass.target.klass, module))
						}
					}
				}
			}
		}

		dependencies.forEach { (module, source) ->
			yield(module to source.joinToString("\n"))
		}
	}
}

fun IContainer.lazyImportGenerator() = lazy<ImportGenerator>()
