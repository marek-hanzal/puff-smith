package leight.encryption

import at.favre.lib.crypto.bcrypt.BCrypt
import leight.container.AbstractService
import leight.container.IContainer

class PasswordService(container: IContainer) : AbstractService(container), IPasswordService {
	override fun encrypt(password: String): String = BCrypt.withDefaults().hashToString(12, password.toCharArray())

	override fun verify(password: String, hash: String) = BCrypt.verifyer().verify(password.toCharArray(), hash).verified
}
