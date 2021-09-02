package leight.client.sdk.annotation

@Target(AnnotationTarget.PROPERTY)
annotation class TypeBool(
	val nullable: Boolean = false,
	val optional: Boolean = false,
)
