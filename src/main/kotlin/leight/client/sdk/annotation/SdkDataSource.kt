package leight.client.sdk.annotation

import kotlin.reflect.KClass

@Target(AnnotationTarget.CLASS)
annotation class SdkDataSource(
	val item: KClass<*>,
	val orderBy: KClass<*> = Unit::class,
	val filter: KClass<*> = Unit::class,
)
