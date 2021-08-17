package leight.client.sdk

import kotlin.reflect.KClass

/**
 * When exporting client side stuff, endpoints being exported must be marked
 * with this annotation.
 */
@Target(AnnotationTarget.CLASS)
@MustBeDocumented
annotation class Sdk(
	val response: KClass<*>
)
