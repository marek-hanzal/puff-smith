package leight.rest.exception

class InvalidRequestException(message: String, cause: Throwable? = null) : RestException(message, cause)
