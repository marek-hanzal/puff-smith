package ps.api.module.user.dto

import leight.client.sdk.property.SdkArrayProperty
import leight.client.sdk.property.SdkLiteralProperty
import java.util.*

data class UserDto(
	@SdkLiteralProperty("string | null")
	val id: UUID?,
	@SdkLiteralProperty("string")
	val site: String,
	@SdkArrayProperty(RoleDto::class)
	val roles: Array<RoleDto>,
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
