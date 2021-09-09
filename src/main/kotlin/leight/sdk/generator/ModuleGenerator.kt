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

		val header = """
import {FC} from "react";
import {
	useDataContext as useCoolDataContext,
	DataContextProvider as CoolDataContextProvider,
	IDataContextProviderProps as ICoolDataContextProviderProps,
	createDelete,
	createGet,
	createPost,
	createPut,
	IDiscoveryIndex,
	ISearchSelectProps,
	SearchSelect,
} from "@leight-core/leight";
		""".trimIndent()

		importGenerator.generate(endpoints).forEach { (module, source) ->
			export.getOrPut(module) { mutableListOf(header) }.add(source)
		}

		classExtractor.toClassList(endpoints).let { classList ->
			classList.forEach { classContext ->
				export.getOrPut(classContext.module.name) { mutableListOf(header) }.add(classGenerator.generate(classContext))
			}
		}
		classExtractor.toExport(endpoints).forEach { exportContext ->
			export.getOrPut(exportContext.module.name) { mutableListOf(header) }.add(endpointGenerator.generate(exportContext))
		}
		classExtractor.toDataExport(endpoints).forEach { dataContext ->
			export.getOrPut(dataContext.module.name) { mutableListOf(header) }.add(dataContextGenerator.generate(dataContext))
			export.getOrPut(dataContext.module.name) { mutableListOf(header) }.add(dataContextProviderGenerator.generate(dataContext))
			export.getOrPut(dataContext.module.name) { mutableListOf(header) }.add(pageSelectGenerator.generate(dataContext))
		}

		export.forEach { (key, value) ->
			yield("$key.tsx" to value.joinToString("\n\n"))
		}
	}
}

fun IContainer.lazyModuleGenerator() = lazy<ModuleGenerator>()
