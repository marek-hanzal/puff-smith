package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.sdk.lazyNameResolver
import leight.sdk.utils.DataContext

class SearchSelectGenerator(container: IContainer) : AbstractService(container) {
	private val nameResolver by container.lazyNameResolver()

	fun generate(dataContext: DataContext) = nameResolver.simpleName(dataContext.klazz).let { name ->
		val generic = """${nameResolver.simpleName(dataContext.data.item)}, ${nameResolver.simpleName(dataContext.data.orderBy)}, ${
			nameResolver.simpleName(
				dataContext.data.filter
			)
		}"""
		"""
		export type I${name}SelectProps = Partial<ISearchSelectProps<${generic}>> & Pick<ISearchSelectProps<${generic}>, "toSearch" | "toOption">;
		
		export const ${name}Select: FC<I${name}SelectProps> = props => {
			return <SearchSelect<${generic}>
				search={do${name}}
				{...props}
			/>
		}
		""".trimIndent()
	}
}

fun IContainer.lazySearchSelectGenerator() = lazy<SearchSelectGenerator>()
