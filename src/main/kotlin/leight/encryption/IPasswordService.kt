package leight.encryption

import leight.config.IConfigurable

interface IPasswordService : IConfigurable {
	fun encrypt(password: String): String

	fun verify(password: String, hash: String): Boolean
}
