package leight.client.sdk.annotation

/**
 * Used to export objet index.
 */
@Target(AnnotationTarget.PROPERTY)
@MustBeDocumented
annotation class SdkIndexProperty(val target: SdkType)
