package leight.client.sdk.generator

import leight.client.sdk.annotation.TypeClass
import leight.client.sdk.exception.SdkException
import leight.client.sdk.lazyNameResolver
import leight.container.AbstractService
import leight.container.IContainer
import kotlin.reflect.KClass

class GenericGenerator(container: IContainer) : AbstractService(container) {
	private val nameResolver by container.lazyNameResolver()

	fun exportClassTypes(sdkType: TypeClass) = "<${sdkType.klass.typeParameters.joinToString("\n") { it.name }}>".let { if (it == "<>") "" else it }.also {
		if (sdkType.klass.typeParameters.count() != sdkType.types.count()) throw SdkException("Missing generic types for [${sdkType.klass.qualifiedName}].")
	}

	fun exportExpandedTypes(typeClass: TypeClass): String {
		if (typeClass.klass.typeParameters.count() != typeClass.types.count()) {
			throw SdkException("Missing generic types for [${typeClass.klass.qualifiedName}].")
		}
		return "<${typeClass.types.joinToString(",") { nameResolver.resolveClassName(typeClass.klass, it.klass) }}>".let { if (it == "<>") "" else it }
	}

	fun exportExpandedClass(typeClass: TypeClass, namespace: KClass<*>) = nameResolver.resolveClassName(namespace, typeClass.klass) + exportExpandedTypes(typeClass)
}

fun IContainer.lazyGenericGenerator() = lazy<GenericGenerator>()
