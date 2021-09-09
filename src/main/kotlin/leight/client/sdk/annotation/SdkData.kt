package leight.client.sdk.annotation

import kotlin.reflect.KClass

@Target(AnnotationTarget.CLASS)
annotation class SdkData(
	val item: KClass<*>,
	val orderBy: KClass<*> = Unit::class,
	val filter: KClass<*> = Unit::class,
)
