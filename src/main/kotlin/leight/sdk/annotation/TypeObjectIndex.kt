package leight.sdk.annotation

/**
 * Used to export objet index (like HashMap<String, Object>).
 */
@Target(AnnotationTarget.PROPERTY)
@MustBeDocumented
annotation class TypeObjectIndex(
	val target: TypeClass,
)
