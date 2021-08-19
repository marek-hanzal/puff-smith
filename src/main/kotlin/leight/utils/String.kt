package leight.utils

import java.security.MessageDigest
import java.security.SecureRandom

fun String.Companion.randomNumber(length: Int): String {
	return SecureRandom().nextInt("9".repeat(length).toInt()).toString().padStart(length, '0')
}

fun String.sha256(): String = MessageDigest
	.getInstance("SHA-256")
	.digest(this.toByteArray())
	.fold("") { str, it -> str + "%02x".format(it) }
