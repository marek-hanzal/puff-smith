package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.sdk.lazyNameResolver
import leight.sdk.utils.DataContext

class DataContextGenerator(container: IContainer) : AbstractService(container) {
	private val nameResolver by container.lazyNameResolver()

	fun generate(dataContext: DataContext) = nameResolver.simpleName(dataContext.klazz).let { name ->
		"export const use${name}Data = () => useDataContext<${nameResolver.simpleName(dataContext.data.item)}, ${nameResolver.simpleName(dataContext.data.orderBy)}, ${
			nameResolver.simpleName(dataContext.data.filter)
		}>()"
	}
}

fun IContainer.lazyDataContextGenerator() = lazy<DataContextGenerator>()
