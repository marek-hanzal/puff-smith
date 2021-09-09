package leight.client.sdk.generator

import leight.client.sdk.annotation.SdkData
import leight.client.sdk.lazyNameResolver
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.IEndpoint
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation

class DataContextProviderGenerator(container: IContainer) : AbstractService(container) {
	private val nameResolver by container.lazyNameResolver()

	fun export(klass: KClass<out IEndpoint>, level: Int) = klass.findAnnotation<SdkData>()?.let { sdkData ->
		nameResolver.filterName(klass.simpleName!!).let { name ->
			"""
			export interface I${name}DataProps extends Partial<ICoolDataContextProviderProps<${nameResolver.resolveClassName(sdkData.item)}, ${nameResolver.resolveClassName(sdkData.orderBy)}, ${
				nameResolver.resolveClassName(
					sdkData.filter
				)
			}>> {
			}
	
			export const ${name}Data: FC<I${name}DataProps> = ({children, ...props}) => {
				return <CoolDataContextProvider<${nameResolver.resolveClassName(sdkData.item)}, ${nameResolver.resolveClassName(sdkData.orderBy)}, ${nameResolver.resolveClassName(sdkData.filter)}>
					fetch={do${nameResolver.filterName(klass.simpleName!!)}}
					{...props}
				>
					{children}
				</CoolDataContextProvider>;
			}
			""".trimIndent().prependIndent("\t".repeat(level + 1))
		}
	}
}

fun IContainer.lazyDataContextProviderGenerator() = lazy<DataContextProviderGenerator>()
