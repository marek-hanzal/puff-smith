package leight.client.sdk.annotation

import kotlin.reflect.KClass

@Target(AnnotationTarget.PROPERTY)
@MustBeDocumented
annotation class TypeClass(
	val klass: KClass<*>,
	val types: Array<TypeClass> = [],
	val nullable: Boolean = false,
	val optional: Boolean = false,
)
