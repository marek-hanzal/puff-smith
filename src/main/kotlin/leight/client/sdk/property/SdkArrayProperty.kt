package leight.client.sdk.property

import kotlin.reflect.KClass

@Target(AnnotationTarget.PROPERTY)
@MustBeDocumented
annotation class SdkArrayProperty(val target: KClass<*>)
