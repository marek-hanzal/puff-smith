package leight.rest.exception

class UnauthorizedException(message: String, cause: Throwable? = null) : RestException(message, cause)
