package leight.client.sdk.annotation

/**
 * When exporting client side stuff, endpoints being exported must be marked
 * with this annotation.
 */
@Target(AnnotationTarget.CLASS)
@MustBeDocumented
annotation class Sdk(
	val request: SdkType = SdkType(Unit::class),
	val response: SdkType = SdkType(Unit::class),
)
