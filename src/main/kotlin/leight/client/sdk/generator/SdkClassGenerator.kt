package leight.client.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import kotlin.reflect.KClass
import kotlin.reflect.full.memberProperties

class SdkClassGenerator(container: IContainer) : AbstractService(container) {
	private val propertyGenerator by container.lazy<SdkPropertyGenerator>()

	fun exportClass(klass: KClass<*>, level: Int): String {
		return """${"\t".repeat(level + 1)}export interface ${klass.simpleName!!} {
${klass.memberProperties.joinToString("\n") { "${propertyGenerator.exportProperty(klass, it, level)};" }}
${"\t".repeat(level + 1)}}"""
	}
}
