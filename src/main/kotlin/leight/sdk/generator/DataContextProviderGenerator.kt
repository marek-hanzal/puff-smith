package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.sdk.lazyNameResolver
import leight.sdk.utils.DataContext

class DataContextProviderGenerator(container: IContainer) : AbstractService(container) {
	private val nameResolver by container.lazyNameResolver()

	fun generate(dataContext: DataContext) = nameResolver.simpleName(dataContext.klazz).let { name ->
		"""
			export interface I${name}DataProps extends Partial<IDataContextProviderProps<${nameResolver.simpleName(dataContext.data.item)}, ${nameResolver.simpleName(dataContext.data.orderBy)}, ${
			nameResolver.simpleName(
				dataContext.data.filter
			)
		}>> {
			}

			export const ${name}Data: FC<I${name}DataProps> = ({children, ...props}) => {
				return <DataContextProvider<${nameResolver.simpleName(dataContext.data.item)}, ${nameResolver.simpleName(dataContext.data.orderBy)}, ${nameResolver.simpleName(dataContext.data.filter)}>
					fetch={do${nameResolver.simpleName(dataContext.klazz)}}
					{...props}
				>
					{children}
				</DataContextProvider>;
			}
			""".trimIndent()
	}
}

fun IContainer.lazyDataContextProviderGenerator() = lazy<DataContextProviderGenerator>()
