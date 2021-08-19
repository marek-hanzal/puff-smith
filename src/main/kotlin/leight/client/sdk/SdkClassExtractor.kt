package leight.client.sdk

import leight.client.sdk.property.SdkArrayProperty
import leight.client.sdk.property.SdkClassProperty
import leight.client.sdk.property.SdkIndexProperty
import leight.container.AbstractService
import leight.container.IContainer
import leight.rest.Endpoint
import leight.rest.IEndpoint
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation
import kotlin.reflect.full.memberProperties

class SdkClassExtractor(container: IContainer) : AbstractService(container) {
	private fun extractClasses(klass: KClass<*>): List<KClass<*>> {
		val classes = mutableListOf<KClass<*>>()
		if (klass !== Unit::class) {
			classes.add(klass)
		}
		klass.memberProperties.forEach { property ->
			property.findAnnotation<SdkArrayProperty>()?.let {
				classes.add(it.target)
				classes.addAll(extractClasses(it.target))
			}
			property.findAnnotation<SdkIndexProperty>()?.let {
				classes.add(it.target)
				classes.addAll(extractClasses(it.target))
			}
			property.findAnnotation<SdkClassProperty>()?.let {
				classes.add(it.target)
				classes.addAll(extractClasses(it.target))
			}
		}
		return classes
	}

	fun sdkClasses(classes: List<KClass<out IEndpoint>>, block: (sdk: Sdk, endpoint: Endpoint, klazz: KClass<out IEndpoint>) -> Unit) {
		classes.filter { it.findAnnotation<Sdk>() !== null && it.findAnnotation<Endpoint>() !== null }.forEach { block(it.findAnnotation()!!, it.findAnnotation()!!, it) }
	}

	fun extractSdkClasses(classes: List<KClass<out IEndpoint>>) = mutableListOf<KClass<*>>().let { all ->
		sdkClasses(classes) { sdk, _, _ ->
			all.addAll(extractClasses(sdk.request))
			all.addAll(extractClasses(sdk.response))
		}
		all
	}.distinct()
}
