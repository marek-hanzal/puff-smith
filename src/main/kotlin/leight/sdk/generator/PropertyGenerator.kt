package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.sdk.annotation.*
import leight.sdk.lazyNameResolver
import kotlin.reflect.KProperty
import kotlin.reflect.full.findAnnotation

class PropertyGenerator(container: IContainer) : AbstractService(container) {
	private val genericGenerator by container.lazyGenericGenerator()
	private val nameResolver by container.lazyNameResolver()

	fun generate(property: KProperty<*>): String? {
		var type: String? = null
		var separator = ":"
		property.findAnnotation<TypeLiteral>()?.let {
			type = it.export
			separator = if (it.optional) "?:" else ":"
		}
		property.findAnnotation<TypeString>()?.let {
			type = "string" + if (it.nullable) " | null" else ""
			separator = if (it.optional) "?:" else ":"
		}
		property.findAnnotation<TypeNumber>()?.let {
			type = "number" + if (it.nullable) " | null" else ""
			separator = if (it.optional) "?:" else ":"
		}
		property.findAnnotation<TypeBool>()?.let {
			type = "boolean" + if (it.nullable) " | null" else ""
			separator = if (it.optional) "?:" else ":"
		}
		property.findAnnotation<TypeArrayClass>()?.let {
			type = nameResolver.simpleName(it.target.klass) + genericGenerator.genericsFor(it.target) + "[]"
		}
		property.findAnnotation<TypeClass>()?.let {
			type = nameResolver.simpleName(it.klass) + genericGenerator.genericsFor(it) + if (it.nullable) " | null" else ""
			separator = if (it.optional) "?:" else ":"
		}
		property.findAnnotation<TypeObjectIndex>()?.let {
			type = "{ [index in string]: " + nameResolver.simpleName(it.target.klass) + genericGenerator.genericsFor(it.target) + " }"
		}
		return type?.let { "\t" + property.name + "$separator " + it + ";" }
	}
}

fun IContainer.lazyPropertyGenerator() = lazy<PropertyGenerator>()
