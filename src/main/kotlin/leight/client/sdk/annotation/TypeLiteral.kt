package leight.client.sdk.annotation

/**
 * Property being exported as is (the literal).
 */
@Target(AnnotationTarget.PROPERTY)
@MustBeDocumented
annotation class TypeLiteral(
	val export: String,
	val optional: Boolean = false,
)
