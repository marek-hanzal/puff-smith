package leight.client.sdk.generator

import leight.client.sdk.annotation.SdkType
import leight.container.AbstractService
import leight.container.IContainer
import kotlin.reflect.full.memberProperties

class SdkClassGenerator(container: IContainer) : AbstractService(container) {
	private val sdkPropertyGenerator by container.lazySdkPropertyGenerator()
	private val sdkGenericGenerator by container.lazySdkGenericGenerator()

	fun exportClass(sdkType: SdkType, level: Int): String {
		return """${"\t".repeat(level + 1)}export interface ${sdkType.klass.simpleName!!}${sdkGenericGenerator.exportClassTypes(sdkType)} {
${sdkType.klass.memberProperties.joinToString("\n") { "${sdkPropertyGenerator.exportProperty(sdkType.klass, it, level)};" }}
${"\t".repeat(level + 1)}}"""
	}
}

fun IContainer.lazySdkClassGenerator() = lazy<SdkClassGenerator>()
