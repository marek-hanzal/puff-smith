package leight.client.sdk.annotation

/**
 * When exporting client side stuff, endpoints being exported must be marked
 * with this annotation.
 */
@Target(AnnotationTarget.CLASS)
@MustBeDocumented
annotation class Sdk(
	val request: TypeClass = TypeClass(Unit::class),
	val response: TypeClass = TypeClass(Unit::class),
)
