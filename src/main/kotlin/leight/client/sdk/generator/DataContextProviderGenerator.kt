package leight.client.sdk.generator

import leight.sdk.annotation.Data
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.IEndpoint
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation

class DataContextProviderGenerator(container: IContainer) : AbstractService(container) {
	fun export(klass: KClass<out IEndpoint>, level: Int) = klass.findAnnotation<Data>()?.let { sdkData ->
//		nameResolver.filterName(klass.simpleName!!).let { name ->
//			"""
//			export interface I${name}DataProps extends Partial<ICoolDataContextProviderProps<${nameResolver.resolveClassName(sdkData.item)}, ${nameResolver.resolveClassName(sdkData.orderBy)}, ${
//				nameResolver.resolveClassName(
//					sdkData.filter
//				)
//			}>> {
//			}
//
//			export const ${name}Data: FC<I${name}DataProps> = ({children, ...props}) => {
//				return <CoolDataContextProvider<${nameResolver.resolveClassName(sdkData.item)}, ${nameResolver.resolveClassName(sdkData.orderBy)}, ${nameResolver.resolveClassName(sdkData.filter)}>
//					fetch={do${nameResolver.filterName(klass.simpleName!!)}}
//					{...props}
//				>
//					{children}
//				</CoolDataContextProvider>;
//			}
//			""".trimIndent().prependIndent("\t".repeat(level + 1))
//		}
	}
}

fun IContainer.lazyDataContextProviderGenerator() = lazy<DataContextProviderGenerator>()
