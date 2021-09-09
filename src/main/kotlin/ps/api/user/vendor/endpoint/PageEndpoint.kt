package ps.api.user.vendor.endpoint

import io.ktor.application.*
import leight.client.sdk.annotation.TypeClass
import leight.container.IContainer
import leight.page.dto.PageRequestDto
import leight.page.dto.PageResponseDto
import leight.rest.AbstractPageEndpoint
import leight.rest.Endpoint
import leight.rest.EndpointMethod
import leight.rest.Response
import leight.sdk.annotation.Data
import leight.sdk.annotation.Module
import ps.storage.module.vendor.dto.VendorFilterDto
import ps.storage.module.vendor.dto.VendorOrderByDto
import ps.storage.module.vendor.repository.lazyVendorRepository
import ps.vendor.dto.VendorDto
import ps.vendor.mapper.lazyVendorMapper

@Endpoint(
	method = EndpointMethod.POST,
	request = TypeClass(
		PageRequestDto::class, [
			TypeClass(VendorOrderByDto::class),
			TypeClass(VendorFilterDto::class),
		]
	),
	response = TypeClass(
		PageResponseDto::class, [
			TypeClass(VendorDto::class),
		]
	)
)
@Data(VendorDto::class, VendorOrderByDto::class, VendorFilterDto::class)
@Module("user/vendor")
class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val vendorRepository by container.lazyVendorRepository()
	private val vendorMapper by container.lazyVendorMapper()

	override suspend fun handle(call: ApplicationCall): Response<*> = call.page(vendorRepository, vendorMapper)
}
