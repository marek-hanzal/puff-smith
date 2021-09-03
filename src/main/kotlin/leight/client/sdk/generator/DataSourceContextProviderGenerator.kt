package leight.client.sdk.generator

import leight.client.sdk.annotation.SdkDataSource
import leight.client.sdk.lazyNameResolver
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.IEndpoint
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation

class DataSourceContextProviderGenerator(container: IContainer) : AbstractService(container) {
	private val nameResolver by container.lazyNameResolver()

	fun export(klass: KClass<out IEndpoint>, level: Int) = klass.findAnnotation<SdkDataSource>()?.let { sdkDataSource ->
		"""
			export interface IDataSourceContextProviderProps extends Partial<ICoolDataSourceContextProviderProps<${nameResolver.resolveClassName(sdkDataSource.item)}, ${nameResolver.resolveClassName(sdkDataSource.orderBy)}, ${
			nameResolver.resolveClassName(
				sdkDataSource.filter
			)
		}>> {
			}
	
			export const DataSourceContextProvider: FC<IDataSourceContextProviderProps> = ({children, ...props}) => {
				return <CoolDataSourceContextProvider<${nameResolver.resolveClassName(sdkDataSource.item)}, ${nameResolver.resolveClassName(sdkDataSource.orderBy)}, ${nameResolver.resolveClassName(sdkDataSource.filter)}>
					fetch={do${nameResolver.filterName(klass.simpleName!!)}}
					{...props}
				>
					{children}
				</CoolDataSourceContextProvider>;
			}
		""".trimIndent().prependIndent("\t".repeat(level + 1))
	}
}

fun IContainer.lazyDataSourceContextProviderGenerator() = lazy<DataSourceContextProviderGenerator>()
