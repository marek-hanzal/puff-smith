package vapersdream

import com.typesafe.config.ConfigFactory
import io.github.config4k.extract
import leight.container.ContainerFactory
import leight.container.IContainer
import leight.http.HttpServerConfig
import leight.pool.PoolConfig

@ExperimentalStdlibApi
object ServerContainer {
	fun create(block: IContainer.() -> Unit) = ContainerFactory.container().apply {
		register(ServerConfig::class) { ConfigFactory.load().extract("vapers-dream") }
		register(PoolConfig::class) { create(ServerConfig::class).pool }
		register(HttpServerConfig::class) { create(ServerConfig::class).httpServer }
//		service(IRoleService::class) { RoleService(this) }
//		service(ISessionValidator::class) { SessionValidator(this) }
		/**
		 * Common services.
		 */
//		configurator(IUpgradeManager::class) {
//			upgrade(u2020_11_16::class)
//			upgrade(u2020_11_17::class)
//			upgrade(u2020_11_17_01::class)
//			upgrade(u2020_11_17_02::class)
//			upgrade(u2020_11_17_03::class)
//			upgrade(u2020_11_17_04::class)
//			upgrade(u2020_11_17_05::class)
//		}
//		configurator(IHttpServer::class) {
//			module(DiscoveryHttpModule::class)
//			module(ClientHttpModule::class)
//			module(PublicHttpModule::class)
//			module(GameHttpModule::class)
//			module(RootHttpModule::class)
//		}
		block(this)
	}
}
