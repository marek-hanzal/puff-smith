package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.IEndpoint
import leight.sdk.lazyClassExtractor
import kotlin.reflect.KClass

class ModuleGenerator(container: IContainer) : AbstractService(container) {
	private val importGenerator by container.lazyImportGenerator()
	private val classGenerator by container.lazyClassGenerator()
	private val classExtractor by container.lazyClassExtractor()

	fun generate(endpoints: List<KClass<out IEndpoint>>) = sequence {
		val export = mutableMapOf<String, MutableList<String>>()

		classExtractor.toClassList(endpoints).let { classList ->
			importGenerator.generate(classList).forEach { (module, source) ->
				export.getOrPut(module) { mutableListOf() }.add(source)
			}

			classList.forEach { classContext ->
				export.getOrPut(classContext.module.name) { mutableListOf() }.add(classGenerator.generate(classContext))
			}
		}

		export.forEach { (key, value) ->
			yield("$key.tsx" to value.joinToString("\n\n"))
		}
	}
}

fun IContainer.lazyModuleGenerator() = lazy<ModuleGenerator>()
