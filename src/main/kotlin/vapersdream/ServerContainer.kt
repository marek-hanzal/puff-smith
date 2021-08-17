package vapersdream

import com.typesafe.config.ConfigFactory
import io.github.config4k.extract
import leight.container.ContainerFactory
import leight.container.IContainer
import leight.http.HttpServerConfig
import leight.http.IHttpServer
import leight.pool.PoolConfig
import leight.rest.IEndpointInfo
import leight.upgrade.IUpgradeManager
import vapersdream.api.module.PublicHttpModule
import vapersdream.api.root.RootHttpModule
import vapersdream.api.user.UserHttpModule

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
		configurator(IUpgradeManager::class) {
//			upgrade(u2020_11_16::class)
		}
		configurator(IHttpServer::class) {
			module(PublicHttpModule::class)
			module(UserHttpModule::class)
			module(RootHttpModule::class)
		}
		configurator(IEndpointInfo::class) {
			base("vapersdream")
		}
		block(this)
	}
}
