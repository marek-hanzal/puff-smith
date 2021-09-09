package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.sdk.utils.ClassContext
import kotlin.reflect.full.memberProperties

class ClassGenerator(container: IContainer) : AbstractService(container) {
	private val propertyGenerator by container.lazyPropertyGenerator()
	private val genericGenerator by container.lazyGenericGenerator()

	fun generate(classContext: ClassContext) = """export interface ${classContext.typeClass.klass.simpleName!!}${genericGenerator.forClass(classContext.typeClass)} {
${classContext.typeClass.klass.memberProperties.mapNotNull { propertyGenerator.generate(it) }.joinToString("\n")}
}"""
}

fun IContainer.lazyClassGenerator() = lazy<ClassGenerator>()
