package leight.repository

import leight.LeightException

open class RepositoryException(message: String, cause: Throwable? = null) : LeightException(message, cause)
