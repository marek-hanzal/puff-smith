package leight.utils

import java.security.MessageDigest
import java.security.SecureRandom

fun String.Companion.randomNumber(length: Int) = SecureRandom().nextInt("9".repeat(length).toInt()).toString().padStart(length, '0')

fun String.sha256() = MessageDigest
	.getInstance("SHA-256")
	.digest(this.toByteArray())
	.fold("") { str, it -> str + "%02x".format(it) }

fun String.toHyphenCase() = split(".")
	.map { part -> part.split("(?=\\p{Upper})".toRegex()) }
	.joinToString(".") { part -> part.filter { piece -> piece.isNotBlank() }.joinToString("-") }
	.lowercase()
