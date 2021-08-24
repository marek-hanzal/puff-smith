package ps.api.module.user.endpoint

import io.ktor.application.*
import io.ktor.request.*
import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.encryption.IPasswordService
import leight.rest.*
import leight.storage.IStorage
import ps.api.module.session.dto.SessionDto
import ps.api.module.user.dto.SignUpDto
import ps.api.module.user.dto.UserDto
import ps.storage.module.user.repository.UserRepository

@Endpoint(
	public = true,
	method = EndpointMethod.POST,
)
@Sdk(
	request = SignUpDto::class,
	response = SessionDto::class,
)
class SignUpEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val userRepository by container.lazy<UserRepository>()
	private val storage by container.lazy<IStorage>()
	private val passwordService by container.lazy<IPasswordService>()

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
					ok(SessionDto(UserDto(user.id.toString(), if (user.site != null) user.site!! else "user", user.roles.map { it.name }.toTypedArray())))
				}
			}
		}
	}
}
