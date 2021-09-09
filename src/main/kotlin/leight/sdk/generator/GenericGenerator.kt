package leight.sdk.generator

import leight.client.sdk.annotation.TypeClass
import leight.client.sdk.exception.SdkException
import leight.container.AbstractService
import leight.container.IContainer

class GenericGenerator(container: IContainer) : AbstractService(container) {
	fun forClass(typeClass: TypeClass) = "<${typeClass.klass.typeParameters.joinToString(", ") { it.name }}>".let { if (it == "<>") "" else it }.also {
		if (typeClass.klass.typeParameters.count() != typeClass.types.count()) throw SdkException("Missing generic types for [${typeClass.klass.qualifiedName}].")
	}

	fun genericsFor(typeClass: TypeClass): String {
		if (typeClass.klass.typeParameters.count() != typeClass.types.count()) {
			throw SdkException("Missing generic types for [${typeClass.klass.qualifiedName}].")
		}
		return "<${typeClass.types.joinToString(", ") { it.klass.simpleName!! }}>".let { if (it == "<>") "" else it }
	}

	fun exportExpandedClass(typeClass: TypeClass) = typeClass.klass.simpleName!! + genericsFor(typeClass)
}

fun IContainer.lazyGenericGenerator() = lazy<GenericGenerator>()
