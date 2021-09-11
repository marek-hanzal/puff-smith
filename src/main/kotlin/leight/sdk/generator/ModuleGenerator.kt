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
	private val endpointGenerator by container.lazyEndpointGenerator()
	private val dataContextGenerator by container.lazyDataContextGenerator()
	private val dataContextProviderGenerator by container.lazyDataContextProviderGenerator()
	private val pageSelectGenerator by container.lazyPageSelectGenerator()

	fun generate(endpoints: List<KClass<out IEndpoint>>) = sequence {
		val export = mutableMapOf<String, MutableList<String>>()

		importGenerator.generate(endpoints).forEach { (module, source) ->
			export.getOrPut(module) { mutableListOf() }.add(source)
		}

		classExtractor.toClassList(endpoints).let { classList ->
			classList.forEach { classContext ->
				export.getOrPut(classContext.module.name) { mutableListOf() }.add(classGenerator.generate(classContext))
			}
		}
		classExtractor.toExport(endpoints).forEach { exportContext ->
			export.getOrPut(exportContext.module.name) { mutableListOf() }.add(endpointGenerator.generate(exportContext))
		}
		classExtractor.toDataExport(endpoints).forEach { dataContext ->
			export.getOrPut(dataContext.module.name) { mutableListOf() }.add(dataContextGenerator.generate(dataContext))
			export.getOrPut(dataContext.module.name) { mutableListOf() }.add(dataContextProviderGenerator.generate(dataContext))
			export.getOrPut(dataContext.module.name) { mutableListOf() }.add(pageSelectGenerator.generate(dataContext))
		}

		export.forEach { (key, value) ->
			yield("$key.tsx" to value.joinToString("\n\n"))
		}
	}
}

fun IContainer.lazyModuleGenerator() = lazy<ModuleGenerator>()
