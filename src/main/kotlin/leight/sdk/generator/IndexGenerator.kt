package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer

class IndexGenerator(container: IContainer) : AbstractService(container) {
	private val index: MutableMap<String, MutableList<String>> = mutableMapOf()

	fun indexOf(name: String) {
		name.split("/").let { items ->
			if (items.count() > 1) {
				(items.subList(0, items.count() - 1).joinToString("/") + "/index.tsx").let { path ->
					index.getOrPut(path) { mutableListOf() }.add(items.last())
				}
			}
		}
	}

	fun generate() = sequence {
		index.forEach { (path, source) ->
			yield(Pair(path, source.distinct().sorted().joinToString("\n") {
				"import * from \"./$it\""
			}))
		}
	}
}

fun IContainer.lazyIndexGenerator() = lazy<IndexGenerator>()
