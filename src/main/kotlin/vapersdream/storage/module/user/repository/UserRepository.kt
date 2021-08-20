package vapersdream.storage.module.user.repository

import leight.container.IContainer
import leight.encryption.IPasswordService
import leight.repository.AbstractRepository
import leight.user.UnknownUserException
import leight.user.UserException
import vapersdream.storage.module.user.entity.UserEntity
import vapersdream.storage.module.user.table.UserTable

class UserRepository(container: IContainer) : AbstractRepository<UserTable, UserEntity>(UserTable, UserEntity, container) {
	private val passwordService by container.lazy<IPasswordService>()

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
