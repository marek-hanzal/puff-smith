package ps

import leight.container.AbstractService
import leight.container.IContainer
import leight.http.HttpServerConfig
import leight.http.IHttpServer
import leight.pool.PoolConfig
import leight.upgrade.IUpgradeManager
import leight.upgrade.IVersionService
import leight.utils.asStamp
import kotlin.system.measureTimeMillis
import kotlin.time.ExperimentalTime

data class ServerConfig(
	val version: String = "dev",
	val pool: PoolConfig,
	val httpServer: HttpServerConfig
)

class Server(container: IContainer) : AbstractService(container) {
	private val serverConfig: ServerConfig by container.lazy()
	private val upgradeManager: IUpgradeManager by container.lazy()
	private val versionService: IVersionService by container.lazy()
	private val httpServer: IHttpServer by container.lazy()

	fun run() {
		measureTimeMillis {
			logger.info { "Starting Puff Smith Server [${serverConfig.version}]" }
			versionService.getCollection().toList().asReversed().apply {
				logger.info { if (count() > 0) "Current upgrades:" else "Initial application state" }
			}.forEach {
				logger.info { "\t\tstamp: [${it.stamp.asStamp()}], version: [${it.version}]" }
			}
			if (upgradeManager.upgrade() > 0) {
				logger.info { "Executed upgrades:" }
				versionService.getCollection().forEach {
					logger.info { "\t\tstamp: [${it.stamp.asStamp()}], version: [${it.version}]" }
				}
			}
		}.also {
			logger.info { "Boobstrap time ${it}ms" }
		}
		httpServer.start("Puff Smith Server [${serverConfig.version}]")
	}
}

@ExperimentalStdlibApi
@ExperimentalTime
fun main() {
	ServerContainer.create {
		register(Server::class) { Server(this) }
		create(Server::class).run()
	}
}
