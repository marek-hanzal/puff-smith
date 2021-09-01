package leight.client.sdk.generator

import leight.client.sdk.annotation.SdkArrayProperty
import leight.client.sdk.annotation.SdkClassProperty
import leight.client.sdk.annotation.SdkIndexProperty
import leight.client.sdk.annotation.SdkLiteralProperty
import leight.client.sdk.lazySdkNameResolver
import leight.container.AbstractService
import leight.container.IContainer
import kotlin.reflect.KClass
import kotlin.reflect.KProperty
import kotlin.reflect.full.findAnnotation

class SdkPropertyGenerator(container: IContainer) : AbstractService(container) {
	private val sdkNameResolver by container.lazySdkNameResolver()
	private val sdkGenericGenerator by container.lazySdkGenericGenerator()

	fun exportProperty(klass: KClass<*>, property: KProperty<*>, level: Int): String {
		var type = "any"
		property.findAnnotation<SdkLiteralProperty>()?.let {
			type = it.export
		}
		property.findAnnotation<SdkArrayProperty>()?.let {
			type = sdkNameResolver.resolveClassName(klass, it.target.klass) + sdkGenericGenerator.exportExpandedTypes(it.target) + "[]"
		}
		property.findAnnotation<SdkClassProperty>()?.let {
			type = sdkNameResolver.resolveClassName(klass, it.target.klass) + sdkGenericGenerator.exportExpandedTypes(it.target)
		}
		property.findAnnotation<SdkIndexProperty>()?.let {
			type = "{ [index in string]: " + sdkNameResolver.resolveClassName(klass, it.target.klass) + sdkGenericGenerator.exportExpandedTypes(it.target) + " }"
		}
		return "\t".repeat(level + 2) + property.name + ": " + type
	}
}

fun IContainer.lazySdkPropertyGenerator() = lazy<SdkPropertyGenerator>()
