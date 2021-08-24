package leight.storage

import leight.config.IConfigurable
import leight.container.IContainer
import org.jetbrains.exposed.sql.Transaction

interface IStorage : IConfigurable {
	fun <T> transaction(statement: Transaction.() -> T): T

	fun <T> transaction(throwable: (Throwable) -> Nothing, statement: Transaction.() -> T): T = try {
		transaction(statement)
	} catch (e: Throwable) {
		throwable(e)
	}

	fun <T> read(statement: Transaction.() -> T) = transaction(statement)

	fun <T> write(statement: Transaction.() -> T) = transaction(statement)

	fun <T> write(throwable: (Throwable) -> Nothing, statement: Transaction.() -> T) = try {
		transaction(statement)
	} catch (e: Throwable) {
		throwable(e)
	}
}

fun IContainer.lazyStorage() = lazy<IStorage>()
