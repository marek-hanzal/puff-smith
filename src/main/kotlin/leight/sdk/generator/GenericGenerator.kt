package leight.sdk.generator

import leight.container.AbstractService
import leight.container.IContainer
import leight.sdk.SdkException
import leight.sdk.annotation.TypeClass
import leight.sdk.lazyNameResolver

class GenericGenerator(container: IContainer) : AbstractService(container) {
	private val nameResolver by container.lazyNameResolver()

	fun forClass(typeClass: TypeClass) = "<${typeClass.klass.typeParameters.joinToString(", ") { it.name }}>".let { if (it == "<>") "" else it }.also {
		if (typeClass.klass.typeParameters.count() != typeClass.types.count()) throw SdkException("Missing generic types for [${typeClass.klass.qualifiedName}].")
	}

	fun genericsFor(typeClass: TypeClass): String {
		if (typeClass.klass.typeParameters.count() != typeClass.types.count()) {
			throw SdkException("Missing generic types for [${typeClass.klass.qualifiedName}].")
		}
		return "<${typeClass.types.joinToString(", ") { nameResolver.simpleName(it.klass) }}>".let { if (it == "<>") "" else it }
	}

	fun exportExpandedClass(typeClass: TypeClass) = nameResolver.simpleName(typeClass.klass) + genericsFor(typeClass)
}

fun IContainer.lazyGenericGenerator() = lazy<GenericGenerator>()
