package leight.client.sdk.property

import kotlin.reflect.KClass

/**
 * Used to export objet index.
 */
@Target(AnnotationTarget.PROPERTY)
@MustBeDocumented
annotation class SdkIndexProperty(val target: KClass<*>)
