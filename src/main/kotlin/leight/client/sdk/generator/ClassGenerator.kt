package leight.client.sdk.generator

import leight.client.sdk.annotation.TypeClass
import leight.container.AbstractService
import leight.container.IContainer
import kotlin.reflect.full.memberProperties

class ClassGenerator(container: IContainer) : AbstractService(container) {
	private val propertyGenerator by container.lazyPropertyGenerator()
	private val genericGenerator by container.lazyGenericGenerator()

	fun exportClass(typeClass: TypeClass, level: Int): String {
		return """${"\t".repeat(level + 1)}export interface ${typeClass.klass.simpleName!!}${genericGenerator.exportClassTypes(typeClass)} {
${typeClass.klass.memberProperties.joinToString("\n") { "${propertyGenerator.exportProperty(typeClass.klass, it, level)};" }}
${"\t".repeat(level + 1)}}"""
	}
}

fun IContainer.lazyClassGenerator() = lazy<ClassGenerator>()
