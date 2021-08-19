package vapersdream.api.module.session.dto

import leight.client.sdk.property.SdkLiteralProperty
import java.util.*

data class UserDto(
	@SdkLiteralProperty("string")
	val id: String,
	@SdkLiteralProperty("string")
	val site: String,
	@SdkLiteralProperty("string[]")
	val roles: Array<String>,
) {
	override fun equals(other: Any?): Boolean {
		if (this === other) return true
		if (javaClass != other?.javaClass) return false

		other as UserDto

		if (!roles.contentEquals(other.roles)) return false

		return true
	}

	override fun hashCode(): Int {
		return roles.contentHashCode()
	}
}
