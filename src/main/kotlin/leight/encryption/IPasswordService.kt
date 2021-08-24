package leight.encryption

import leight.config.IConfigurable
import leight.container.IContainer

interface IPasswordService : IConfigurable {
	fun encrypt(password: String): String

	fun verify(password: String, hash: String): Boolean
}

fun IContainer.lazyPasswordService() = lazy<IPasswordService>()
