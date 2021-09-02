package leight.client.sdk.generator

import leight.client.sdk.annotation.SdkDataSource
import leight.client.sdk.lazyNameResolver
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.IEndpoint
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation

class DataSourceContextGenerator(container: IContainer) : AbstractService(container) {
	private val nameResolver by container.lazyNameResolver()

	fun export(klass: KClass<out IEndpoint>, level: Int) = klass.findAnnotation<SdkDataSource>()?.let { sdkDataSource ->
		"\t".repeat(level + 1) + "export const useDataSourceContext = () => useCoolDataSourceContext<${nameResolver.resolveClassName(sdkDataSource.item)}, ${nameResolver.resolveClassName(sdkDataSource.orderBy)}>()"
	}
}

fun IContainer.lazyDataSourceGenerator() = lazy<DataSourceContextGenerator>()
