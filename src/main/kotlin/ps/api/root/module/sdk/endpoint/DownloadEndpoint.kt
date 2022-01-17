package ps.api.root.module.sdk.endpoint

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import leight.container.IContainer
import leight.rest.AbstractEndpoint
import leight.rest.Endpoint
import leight.rest.EndpointMethod
import leight.sdk.lazySdkService
import mu.KLogger

@Endpoint(
	EndpointMethod.GET,
)
class DownloadEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val sdkService by container.lazySdkService()

	override suspend fun request(logger: KLogger, call: ApplicationCall) {
		call.response.header(
			HttpHeaders.ContentDisposition,
			ContentDisposition.Attachment.withParameter(ContentDisposition.Parameters.FileName, "sdk.zip").toString()
		)
		call.respondOutputStream(ContentType.parse("application/zip"), HttpStatusCode.OK, sdkService::zip)
	}
}
