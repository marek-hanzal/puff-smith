package leight.rest

enum class EndpointMethod {
	POST, GET, PATCH, PUT, DELETE,
}

@Target(AnnotationTarget.CLASS)
@MustBeDocumented
annotation class Endpoint(
	val public: Boolean = false,
	val method: EndpointMethod,
	val roles: Array<String> = [],
)
