package leight.client.sdk.annotation

@Target(AnnotationTarget.PROPERTY)
annotation class TypeNullBool(
	val optional: Boolean = false,
)
