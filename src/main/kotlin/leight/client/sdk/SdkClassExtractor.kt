package leight.client.sdk

import leight.client.sdk.property.SdkArrayProperty
import leight.client.sdk.property.SdkIndexProperty
import leight.container.AbstractService
import leight.container.IContainer
import kotlin.reflect.KClass
import kotlin.reflect.full.findAnnotation
import kotlin.reflect.full.memberProperties

class SdkClassExtractor(container: IContainer) : AbstractService(container) {
	fun extractClasses(klass: KClass<*>): List<KClass<*>> {
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
		}
		return classes
	}

	fun extractSdkClasses(classes: List<KClass<*>>) = mutableListOf<KClass<*>>().let { all ->
		all.addAll(classes.filter { it.findAnnotation<Sdk>() !== null }.onEach { klass ->
			klass.findAnnotation<Sdk>()?.let { sdk ->
				all.addAll(extractClasses(sdk.request))
				all.addAll(extractClasses(sdk.response))
			}
		})
		all
	}.distinct()
}
