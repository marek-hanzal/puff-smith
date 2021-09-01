package leight.client.sdk.annotation

@Target(AnnotationTarget.PROPERTY)
@MustBeDocumented
annotation class TypeArrayClass(
	val target: TypeClass,
)
