package leight.client.sdk.generator

import leight.client.sdk.SdkNameResolver
import leight.client.sdk.property.SdkArrayProperty
import leight.client.sdk.property.SdkIndexProperty
import leight.client.sdk.property.SdkLiteralProperty
import leight.container.AbstractService
import leight.container.IContainer
import kotlin.reflect.KClass
import kotlin.reflect.KProperty
import kotlin.reflect.full.findAnnotation

class SdkPropertyGenerator(container: IContainer) : AbstractService(container) {
	private val sdkNameResolver by container.lazy<SdkNameResolver>()

	fun exportProperty(klass: KClass<*>, property: KProperty<*>, level: Int): String {
		var type = "any"
		property.findAnnotation<SdkLiteralProperty>()?.let {
			type = it.export
		}
		property.findAnnotation<SdkArrayProperty>()?.let {
			type = sdkNameResolver.resolveClassName(klass, it.target) + "[]"
		}
		property.findAnnotation<SdkIndexProperty>()?.let {
			type = "{ [index in string]: " + sdkNameResolver.resolveClassName(klass, it.target) + " }"
		}
		return "\t".repeat(level + 2) + property.name + ": " + type
	}
}
