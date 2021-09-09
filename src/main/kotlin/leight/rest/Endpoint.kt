package leight.rest

import leight.sdk.annotation.TypeClass

enum class EndpointMethod {
	POST, GET, PATCH, PUT, DELETE,
}

@Target(AnnotationTarget.CLASS)
@MustBeDocumented
annotation class Endpoint(
	val method: EndpointMethod,
	val request: TypeClass = TypeClass(Unit::class),
	val response: TypeClass = TypeClass(Unit::class),
	val public: Boolean = false,
	val roles: Array<String> = [],
)
