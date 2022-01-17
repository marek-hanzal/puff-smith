package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.sdk.annotation.*

class TypeGenerator(container: IContainer) : AbstractService(container) {
	private val genericGenerator by container.lazyGenericGenerator()

	fun resolve(annotation: Any) = when (annotation) {
		is TypeLiteral -> annotation.export
		is TypeString -> "string" + if (annotation.nullable) " | null" else ""
		is TypeNumber -> "number" + if (annotation.nullable) " | null" else ""
		is TypeBool -> "boolean" + if (annotation.nullable) " | null" else ""
		is TypeArrayClass -> genericGenerator.exportExpandedClass(annotation.target) + "[]"
		is TypeClass -> genericGenerator.exportExpandedClass(annotation) + if (annotation.nullable) " | null" else ""
		else -> "never"
	}
}

fun IContainer.lazyTypeGenerator() = lazy<TypeGenerator>()
