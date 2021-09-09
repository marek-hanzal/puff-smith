package leight.client.sdk.generator

import leight.client.sdk.annotation.SdkData
import leight.client.sdk.lazyNameResolver
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.IEndpoint
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation

class DataContextGenerator(container: IContainer) : AbstractService(container) {
	private val nameResolver by container.lazyNameResolver()

	fun export(klass: KClass<out IEndpoint>, level: Int) = klass.findAnnotation<SdkData>()?.let { sdkData ->
		nameResolver.filterName(klass.simpleName!!).let { name ->
			"\t".repeat(level + 1) + "export const use${name}Data = () => useCoolDataContext<${nameResolver.resolveClassName(sdkData.item)}, ${nameResolver.resolveClassName(sdkData.orderBy)}, ${
				nameResolver.resolveClassName(
					sdkData.filter
				)
			}>()"
		}
	}
}

fun IContainer.lazyDataContextGenerator() = lazy<DataContextGenerator>()
