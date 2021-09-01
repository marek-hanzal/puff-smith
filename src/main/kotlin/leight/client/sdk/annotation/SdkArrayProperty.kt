package leight.client.sdk.annotation

@Target(AnnotationTarget.PROPERTY)
@MustBeDocumented
annotation class SdkArrayProperty(
	val target: SdkType,
)
