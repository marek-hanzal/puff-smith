package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.sdk.utils.ClassContext

class ClassGenerator(container: IContainer) : AbstractService(container) {
	fun generate(classContext: ClassContext) = """
		export interface ${classContext.typeClass.klass.simpleName!!} {
		}
	""".trimIndent()
}

fun IContainer.lazyClassGenerator() = lazy<ClassGenerator>()
