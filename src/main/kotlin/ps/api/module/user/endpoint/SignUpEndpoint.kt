package ps.api.module.user.endpoint

import io.ktor.application.*
import io.ktor.request.*
import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.encryption.lazyPasswordService
import leight.rest.*
import leight.storage.lazyStorage
import ps.api.module.session.dto.SessionDto
import ps.api.module.user.dto.RoleDto
import ps.api.module.user.dto.SignUpDto
import ps.api.module.user.dto.UserDto
import ps.storage.module.user.repository.lazyUserRepository

@Endpoint(
	public = true,
	method = EndpointMethod.POST,
)
@Sdk(
	request = SignUpDto::class,
	response = SessionDto::class,
)
class SignUpEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val userRepository by container.lazyUserRepository()
	private val storage by container.lazyStorage()
	private val passwordService by container.lazyPasswordService()

	override suspend fun handle(call: ApplicationCall): Response<*> {
		return call.receive<SignUpDto>().let { request ->
			storage.write(userRepository::exception) {
				userRepository.create {
					login = request.login
					password = passwordService.encrypt(request.password)
					site = "user"
				}
			}
			storage.read {
				userRepository.findByCredentials(request.login, request.password).let { user ->
					ok(SessionDto(UserDto(user.id.value, if (user.site != null) user.site!! else "user", user.roles.map { RoleDto(it.id.value, it.name) })))
				}
			}
		}
	}
}
