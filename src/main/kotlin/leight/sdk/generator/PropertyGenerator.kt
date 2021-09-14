package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.sdk.annotation.*
import kotlin.reflect.KProperty
import kotlin.reflect.full.findAnnotation

class PropertyGenerator(container: IContainer) : AbstractService(container) {
	private val genericGenerator by container.lazyGenericGenerator()
	private val typeGenerator by container.lazyTypeGenerator()

	fun generate(property: KProperty<*>): String? {
		var type: String? = null
		var separator = ":"
		property.findAnnotation<TypeLiteral>()?.let {
			type = typeGenerator.resolve(it)
			separator = if (it.optional) "?:" else ":"
		}
		property.findAnnotation<TypeString>()?.let {
			type = typeGenerator.resolve(it)
			separator = if (it.optional) "?:" else ":"
		}
		property.findAnnotation<TypeNumber>()?.let {
			type = typeGenerator.resolve(it)
			separator = if (it.optional) "?:" else ":"
		}
		property.findAnnotation<TypeBool>()?.let {
			type = typeGenerator.resolve(it)
			separator = if (it.optional) "?:" else ":"
		}
		property.findAnnotation<TypeArrayClass>()?.let {
			type = typeGenerator.resolve(it)
		}
		property.findAnnotation<TypeClass>()?.let {
			type = typeGenerator.resolve(it)
			separator = if (it.optional) "?:" else ":"
		}
		property.findAnnotation<TypeObjectIndex>()?.let {
			type = "{ [index in string]: " + genericGenerator.exportExpandedClass(it.target) + " }"
		}
		return type?.let { "\t" + property.name + "$separator " + it + ";" }
	}
}

fun IContainer.lazyPropertyGenerator() = lazy<PropertyGenerator>()
