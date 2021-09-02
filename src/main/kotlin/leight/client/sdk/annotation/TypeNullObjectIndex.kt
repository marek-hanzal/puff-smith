package leight.client.sdk.annotation

/**
 * Used to export objet index (like HashMap<String, Object>).
 */
@Target(AnnotationTarget.PROPERTY)
@MustBeDocumented
annotation class TypeNullObjectIndex(
	val target: TypeClass,
)
