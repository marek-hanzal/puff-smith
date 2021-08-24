package ps.upgrade.u2021_08_19.storage.module.user.repository

import leight.container.IContainer
import leight.encryption.lazyPasswordService
import leight.repository.AbstractRepository
import leight.user.UnknownUserException
import leight.user.UserException
import ps.upgrade.u2021_08_19.storage.module.user.entity.UserEntity
import ps.upgrade.u2021_08_19.storage.module.user.table.UserTable

class UserRepository(container: IContainer) : AbstractRepository<UserTable, UserEntity>(UserTable, UserEntity, container) {
	private val passwordService by container.lazyPasswordService()

	fun findByLogin(login: String) = entity.find { table.login eq login }.first()

	fun findByCredentials(login: String, password: String) = try {
		findByLogin(login).also {
			if (it.password == null) {
				throw UserException("Inactive user")
			}
			if (!passwordService.verify(password, it.password!!)) {
				throw UserException("Invalid password")
			}
		}
	} catch (e: NoSuchElementException) {
		throw UnknownUserException("Requested unknown login [$login].", e)
	}
}

fun IContainer.lazyUserRepository() = lazy<UserRepository>()
