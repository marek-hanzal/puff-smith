package leight.client.sdk.annotation

import kotlin.reflect.KClass

@Target(AnnotationTarget.PROPERTY)
@MustBeDocumented
annotation class TypeNullClass(
	val klass: KClass<*>,
	val types: Array<TypeNullClass> = [],
)
