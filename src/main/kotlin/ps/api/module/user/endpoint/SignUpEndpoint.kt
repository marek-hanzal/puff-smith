package ps.api.module.user.endpoint

import io.ktor.application.*
import io.ktor.request.*
import leight.client.sdk.annotation.TypeClass
import leight.container.IContainer
import leight.encryption.lazyPasswordService
import leight.rest.*
import leight.sdk.annotation.Module
import leight.storage.lazyStorage
import ps.api.module.user.dto.SignUpDto
import ps.session.dto.SessionDto
import ps.storage.module.user.repository.lazyUserRepository
import ps.user.mapper.lazyUserToSessionMapper

@Endpoint(
	public = true,
	method = EndpointMethod.POST,
	request = TypeClass(SignUpDto::class),
	response = TypeClass(SessionDto::class),
)
@Module("shared/user")
class SignUpEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val userRepository by container.lazyUserRepository()
	private val userToSessionMapper by container.lazyUserToSessionMapper()
	private val storage by container.lazyStorage()
	private val passwordService by container.lazyPasswordService()

	override suspend fun handle(call: ApplicationCall): Response<*> {
		return call.receive<SignUpDto>().let { request ->
			storage.write(userRepository::exception) {
				userRepository.create {
					name = request.name
					login = request.login
					password = passwordService.encrypt(request.password)
					site = "user"
				}
			}
			storage.read {
				ok(userToSessionMapper.map(userRepository.findByCredentials(request.login, request.password)))
			}
		}
	}
}
