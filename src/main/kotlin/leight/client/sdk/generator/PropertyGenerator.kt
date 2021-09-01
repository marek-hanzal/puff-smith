package leight.client.sdk.generator

import leight.client.sdk.annotation.*
import leight.client.sdk.lazyNameResolver
import leight.container.AbstractService
import leight.container.IContainer
import kotlin.reflect.KClass
import kotlin.reflect.KProperty
import kotlin.reflect.full.findAnnotation

class PropertyGenerator(container: IContainer) : AbstractService(container) {
	private val nameResolver by container.lazyNameResolver()
	private val genericGenerator by container.lazyGenericGenerator()

	fun exportProperty(klass: KClass<*>, property: KProperty<*>, level: Int): String {
		var type = "any"
		property.findAnnotation<TypeLiteral>()?.let {
			type = it.export
		}
		property.findAnnotation<TypeString>()?.let {
			type = "string"
		}
		property.findAnnotation<TypeNullString>()?.let {
			type = "string | null"
		}
		property.findAnnotation<TypeNumber>()?.let {
			type = "number"
		}
		property.findAnnotation<TypeNullNumber>()?.let {
			type = "number | null"
		}
		property.findAnnotation<TypeBool>()?.let {
			type = "boolean"
		}
		property.findAnnotation<TypeNullBool>()?.let {
			type = "boolean | null"
		}
		property.findAnnotation<TypeArrayClass>()?.let {
			type = nameResolver.resolveClassName(klass, it.target.klass) + genericGenerator.exportExpandedTypes(it.target) + "[]"
		}
		property.findAnnotation<TypeClass>()?.let {
			type = nameResolver.resolveClassName(klass, it.klass) + genericGenerator.exportExpandedTypes(it)
		}
		property.findAnnotation<TypeObjectIndex>()?.let {
			type = "{ [index in string]: " + nameResolver.resolveClassName(klass, it.target.klass) + genericGenerator.exportExpandedTypes(it.target) + " }"
		}
		return "\t".repeat(level + 2) + property.name + ": " + type
	}
}

fun IContainer.lazyPropertyGenerator() = lazy<PropertyGenerator>()
