package leight.client.sdk.annotation

@Target(AnnotationTarget.PROPERTY)
annotation class TypeString(
	val nullable: Boolean = false,
	val optional: Boolean = false,
)
