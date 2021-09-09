package ps.api.user.atomizer.endpoint

import io.ktor.application.*
import io.ktor.request.*
import leight.client.sdk.annotation.TypeClass
import leight.container.IContainer
import leight.rest.*
import leight.sdk.annotation.Module
import leight.storage.lazyStorage
import ps.api.user.atomizer.dto.CreateDto
import ps.atomizer.dto.AtomizerDto
import ps.atomizer.mapper.lazyAtomizerMapper
import ps.storage.module.atomizer.repository.lazyAtomizerRepository
import ps.storage.module.vendor.repository.lazyVendorRepository

@Endpoint(
	method = EndpointMethod.POST,
	request = TypeClass(CreateDto::class),
	response = TypeClass(AtomizerDto::class),
)
@Module("user/atomizer")
class CreateEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val atomizerRepository by container.lazyAtomizerRepository()
	private val atomizerMapper by container.lazyAtomizerMapper()
	private val vendorRepository by container.lazyVendorRepository()
	private val storage by container.lazyStorage()

	override suspend fun handle(call: ApplicationCall): Response<*> = call.receive<CreateDto>().let { request ->
		created(storage.write {
			atomizerMapper.map(atomizerRepository.create {
				vendor = vendorRepository.find(request.vendorId).id
				name = request.name
				code = request.code
				base = request.base
				coils = request.coils
				maxCoilSize = request.maxCoilSize
				maxWraps = request.maxWraps
				capacity = request.capacity
				squonk = request.squonk
				createdBy = call.currentUser().id
			})
		})
	}
}
