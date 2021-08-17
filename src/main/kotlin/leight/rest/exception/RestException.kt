package leight.rest.exception

import leight.LeightException

open class RestException(message: String, cause: Throwable? = null) : LeightException(message, cause)
