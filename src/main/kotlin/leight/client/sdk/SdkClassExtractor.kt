package leight.client.sdk

import leight.client.sdk.annotation.*
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.Endpoint
import leight.rest.IEndpoint
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation
import kotlin.reflect.full.memberProperties

class SdkClassExtractor(container: IContainer) : AbstractService(container) {
	private fun extractClasses(sdkType: SdkType): List<SdkType> {
		val classes = mutableListOf<SdkType>()
		if (sdkType.klass !== Unit::class) {
			classes.add(sdkType)
		}
		sdkType.klass.memberProperties.forEach { property ->
			property.findAnnotation<SdkArrayProperty>()?.let {
				classes.add(it.target)
				classes.addAll(extractClasses(it.target))
				it.target.types.forEach { typeClass ->
					classes.add(typeClass)
					classes.addAll(extractClasses(typeClass))
				}
			}
			property.findAnnotation<SdkIndexProperty>()?.let {
				classes.add(it.target)
				classes.addAll(extractClasses(it.target))
				it.target.types.forEach { typeClass ->
					classes.add(typeClass)
					classes.addAll(extractClasses(typeClass))
				}
			}
			property.findAnnotation<SdkClassProperty>()?.let {
				classes.add(it.target)
				classes.addAll(extractClasses(it.target))
				it.target.types.forEach { typeClass ->
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

	fun extractSdkClasses(classes: List<KClass<out IEndpoint>>) = mutableListOf<SdkType>().let { all ->
		sdkClasses(classes) { sdk, _, _ ->
			all.addAll(extractClasses(sdk.request))
			sdk.request.types.forEach { all.addAll(extractClasses(it)) }
			all.addAll(extractClasses(sdk.response))
			sdk.response.types.forEach { all.addAll(extractClasses(it)) }
		}
		all
	}.distinct()
}

fun IContainer.lazySdkClassExtractor() = lazy<SdkClassExtractor>()
