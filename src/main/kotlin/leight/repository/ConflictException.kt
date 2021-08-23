package leight.repository

/**
 * Thrown when creating an entity which already exists by a unique key.
 */
class ConflictException(message: String, cause: Throwable? = null) : RepositoryException(message, cause)
