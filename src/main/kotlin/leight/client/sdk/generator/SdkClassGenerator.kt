package leight.client.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import kotlin.reflect.KClass
import kotlin.reflect.full.memberProperties

class SdkClassGenerator(container: IContainer) : AbstractService(container) {
	private val propertyGenerator by container.lazy<SdkPropertyGenerator>()

	fun exportClass(klass: KClass<*>): String {
		return """export interface ${klass.simpleName!!} {
		${klass.memberProperties.joinToString("\n\t\t") { "${propertyGenerator.exportProperty(klass, it)};" }}
	}"""
	}
}
