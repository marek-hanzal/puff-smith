package leight.http

import leight.container.IContainer

data class HttpServerConfig(
	val port: Int,
	var host: String
)

fun IContainer.lazyHttpServerConfig() = lazy<HttpServerConfig>()
