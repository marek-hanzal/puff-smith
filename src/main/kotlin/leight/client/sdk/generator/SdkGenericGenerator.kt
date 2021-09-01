package leight.client.sdk.generator

import leight.client.sdk.annotation.SdkType
import leight.client.sdk.exception.SdkException
import leight.client.sdk.lazySdkNameResolver
import leight.container.AbstractService
import leight.container.IContainer

class SdkGenericGenerator(container: IContainer) : AbstractService(container) {
	private val sdkNameResolver by container.lazySdkNameResolver()

	fun exportClassTypes(sdkType: SdkType) = "<${sdkType.klass.typeParameters.joinToString("\n") { it.name }}>".let { if (it == "<>") "" else it }.also {
		if (sdkType.klass.typeParameters.count() != sdkType.types.count()) throw SdkException("Missing generic types for [${sdkType.klass.qualifiedName}].")
	}

	fun exportExpandedTypes(sdkType: SdkType): String {
		if (sdkType.klass.typeParameters.count() != sdkType.types.count()) {
			throw SdkException("Missing generic types for [${sdkType.klass.qualifiedName}].")
		}
		return "<${sdkType.types.joinToString(",") { sdkNameResolver.resolveClassName(sdkType.klass, it.klass) }}>".let { if (it == "<>") "" else it }
	}
}

fun IContainer.lazySdkGenericGenerator() = lazy<SdkGenericGenerator>()
