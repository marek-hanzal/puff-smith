package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.sdk.lazyNameResolver
import leight.sdk.utils.ClassContext
import kotlin.reflect.full.memberProperties

class ClassGenerator(container: IContainer) : AbstractService(container) {
	private val propertyGenerator by container.lazyPropertyGenerator()
	private val genericGenerator by container.lazyGenericGenerator()
	private val nameResolver by container.lazyNameResolver()

	fun generate(classContext: ClassContext) = """export interface ${nameResolver.simpleName(classContext.typeClass.klass)}${genericGenerator.forClass(classContext.typeClass)} {
${classContext.typeClass.klass.memberProperties.mapNotNull { propertyGenerator.generate(it) }.joinToString("\n")}
}"""
}

fun IContainer.lazyClassGenerator() = lazy<ClassGenerator>()
