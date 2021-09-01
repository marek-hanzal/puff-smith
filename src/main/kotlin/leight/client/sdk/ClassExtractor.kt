package leight.client.sdk

import leight.client.sdk.annotation.Sdk
import leight.client.sdk.annotation.TypeArrayClass
import leight.client.sdk.annotation.TypeClass
import leight.client.sdk.annotation.TypeObjectIndex
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.Endpoint
import leight.rest.IEndpoint
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation
import kotlin.reflect.full.memberProperties

class ClassExtractor(container: IContainer) : AbstractService(container) {
	private fun extractClasses(sdkType: TypeClass): List<TypeClass> {
		val classes = mutableListOf<TypeClass>()
		if (sdkType.klass !== Unit::class) {
			classes.add(sdkType)
		}
		sdkType.klass.memberProperties.forEach { property ->
			property.findAnnotation<TypeArrayClass>()?.let {
				classes.addAll(extractClasses(it.target))
				it.target.types.forEach { typeClass ->
					classes.add(typeClass)
					classes.addAll(extractClasses(typeClass))
				}
			}
			property.findAnnotation<TypeObjectIndex>()?.let {
				classes.addAll(extractClasses(it.target))
				it.target.types.forEach { typeClass ->
					classes.add(typeClass)
					classes.addAll(extractClasses(typeClass))
				}
			}
			property.findAnnotation<TypeClass>()?.let {
				classes.addAll(extractClasses(it))
				it.types.forEach { typeClass ->
					classes.add(typeClass)
					classes.addAll(extractClasses(typeClass))
				}
			}
		}
		return classes
	}

	fun sdkClasses(classes: List<KClass<out IEndpoint>>, block: (sdk: Sdk, endpoint: Endpoint, klazz: KClass<out IEndpoint>) -> Unit) {
		classes.filter { it.findAnnotation<Sdk>() !== null && it.findAnnotation<Endpoint>() !== null }.forEach { block(it.findAnnotation()!!, it.findAnnotation()!!, it) }
	}

	fun extractSdkClasses(classes: List<KClass<out IEndpoint>>) = mutableListOf<TypeClass>().let { all ->
		sdkClasses(classes) { sdk, _, _ ->
			all.addAll(extractClasses(sdk.request))
			sdk.request.types.forEach { all.addAll(extractClasses(it)) }
			all.addAll(extractClasses(sdk.response))
			sdk.response.types.forEach { all.addAll(extractClasses(it)) }
		}
		all
	}.distinct()
}

fun IContainer.lazyClassExtractor() = lazy<ClassExtractor>()
