package leight.link

import io.ktor.http.*
import leight.container.AbstractService
import leight.container.IContainer
import leight.http.HttpServerConfig

class LinkGenerator(container: IContainer) : AbstractService(container), ILinkGenerator {
	private val httpServerConfig by container.lazy<HttpServerConfig>()
	private val host by lazy { Url(httpServerConfig.host) }

	override fun link(path: String, parameters: Parameters): Url {
		return Url(host.protocol, host.host, host.port, path, parameters, "", null, null, false)
	}
}
