package leight.client.sdk.annotation

/**
 * Property being exported as is (the literal).
 */
@Target(AnnotationTarget.PROPERTY)
@MustBeDocumented
annotation class SdkLiteralProperty(val export: String)
