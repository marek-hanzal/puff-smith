package leight.rest

import leight.LeightException

class RestException(message: String, cause: Throwable? = null) : LeightException(message, cause)
