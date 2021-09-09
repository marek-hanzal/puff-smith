package leight.sdk.generator

import leight.client.sdk.annotation.TypeBool
import leight.client.sdk.annotation.TypeLiteral
import leight.client.sdk.annotation.TypeNumber
import leight.client.sdk.annotation.TypeString
import leight.container.AbstractService
import leight.container.IContainer
import kotlin.reflect.KProperty
import kotlin.reflect.full.findAnnotation

class PropertyGenerator(container: IContainer) : AbstractService(container) {
//	private val genericGenerator by container.lazyGenericGenerator()

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
//		property.findAnnotation<TypeArrayClass>()?.let {
//			type = nameResolver.resolveClassName(it.target.klass) + genericGenerator.exportExpandedTypes(it.target) + "[]"
//		}
//		property.findAnnotation<TypeClass>()?.let {
//			type = nameResolver.resolveClassName(it.klass) + genericGenerator.exportExpandedTypes(it) + if (it.nullable) " | null" else ""
//			separator = if (it.optional) "?:" else ":"
//		}
//		property.findAnnotation<TypeObjectIndex>()?.let {
//			type = "{ [index in string]: " + nameResolver.resolveClassName(it.target.klass) + genericGenerator.exportExpandedTypes(it.target) + " }"
//		}
		return type?.let { "\t" + property.name + "$separator " + it + ";" }
	}
}

fun IContainer.lazyPropertyGenerator() = lazy<PropertyGenerator>()
