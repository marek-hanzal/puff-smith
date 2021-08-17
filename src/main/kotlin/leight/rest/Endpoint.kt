package leight.rest

enum class EndpointMethod {
	POST, GET, PATCH, PUT, DELETE,
}

@Target(AnnotationTarget.CLASS)
@MustBeDocumented
annotation class Endpoint(
	val method: EndpointMethod,
	val public: Boolean = false,
	val roles: Array<String> = [],
)
