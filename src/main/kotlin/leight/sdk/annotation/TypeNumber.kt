package leight.sdk.annotation

@Target(AnnotationTarget.PROPERTY)
annotation class TypeNumber(
	val nullable: Boolean = false,
	val optional: Boolean = false,
)
