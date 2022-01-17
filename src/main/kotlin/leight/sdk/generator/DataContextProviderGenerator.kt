package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.sdk.lazyNameResolver
import leight.sdk.utils.DataContext

class DataContextProviderGenerator(container: IContainer) : AbstractService(container) {
	private val nameResolver by container.lazyNameResolver()

	fun generate(dataContext: DataContext) = nameResolver.simpleName(dataContext.klazz).let { name ->
		val item = nameResolver.simpleName(dataContext.data.item)
		val orderBy = nameResolver.simpleName(dataContext.data.orderBy)
		val filter = nameResolver.simpleName(dataContext.data.filter)
		val generic = "$item, $orderBy, $filter"
		"""
			export interface I${name}DataProps extends Partial<IDataContextProviderProps<$generic>> {
			}

			export const ${name}Data: FC<I${name}DataProps> = ({children, ...props}) => {
				return <DataContextProvider<$generic>
					fetch={do$name}
					{...props}
				>
					{children}
				</DataContextProvider>;
			}
			""".trimIndent()
	}
}

fun IContainer.lazyDataContextProviderGenerator() = lazy<DataContextProviderGenerator>()
