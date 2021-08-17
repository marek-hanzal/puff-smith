package leight.rest.exception

open class ResourceLimitException(message: String, cause: Throwable? = null) : RestException(message, cause)
