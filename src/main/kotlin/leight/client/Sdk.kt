package leight.client

/**
 * When exporting client side stuff, endpoints being exported must be marked
 * with this annotation.
 */
@Target(AnnotationTarget.CLASS)
@MustBeDocumented
annotation class Sdk
