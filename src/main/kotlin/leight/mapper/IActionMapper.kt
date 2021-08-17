package leight.mapper

import leight.config.IConfigurable

/**
 * Takes an input and map it to an action (for example new
 * record in database).
 */
interface IActionMapper<TRequest, TResponse, TException> : IConfigurable {
	fun resolve(item: TRequest): TResponse

	fun exception(e: Throwable): TException? = e.message?.let { message ->
		/**
		 * Find exception response by the key contained in the exception message; if exists, return
		 * its value (which is a callback).
		 */
		exception().filter { message.contains(it.key) }.map { it.value() }.firstOrNull()
	}

	fun exception(): Map<String, () -> TException> = mapOf()
}
