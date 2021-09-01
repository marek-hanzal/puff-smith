package leight.client.sdk.annotation

@Target(AnnotationTarget.PROPERTY)
@MustBeDocumented
annotation class SdkClassProperty(val target: SdkType)
