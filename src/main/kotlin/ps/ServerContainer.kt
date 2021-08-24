package ps

import com.typesafe.config.ConfigFactory
import io.github.config4k.extract
import leight.container.ContainerFactory
import leight.container.IContainer
import leight.http.HttpServerConfig
import leight.http.IHttpServer
import leight.pool.PoolConfig
import leight.rest.IEndpointInfo
import leight.session.ISessionValidator
import leight.upgrade.IUpgradeManager
import ps.api.module.PublicHttpModule
import ps.api.root.RootHttpModule
import ps.api.user.UserHttpModule
import ps.session.SessionValidator
import ps.upgrade.u2021_08_19.u2021_08_19
import ps.upgrade.u2021_08_24.u2021_08_24

@ExperimentalStdlibApi
object ServerContainer {
	fun create(block: IContainer.() -> Unit) = ContainerFactory.container().apply {
		register(ServerConfig::class) { ConfigFactory.load().extract("puff-smith") }
		register(PoolConfig::class) { create(ServerConfig::class).pool }
		register(HttpServerConfig::class) { create(ServerConfig::class).httpServer }
//		service(IRoleService::class) { RoleService(this) }
		service(ISessionValidator::class) { SessionValidator(this) }
		/**
		 * Common services.
		 */
		configurator(IUpgradeManager::class) {
			upgrade(u2021_08_19::class)
			upgrade(u2021_08_24::class)
		}
		configurator(IHttpServer::class) {
			module(PublicHttpModule::class)
			module(UserHttpModule::class)
			module(RootHttpModule::class)
		}
		configurator(IEndpointInfo::class) {
			base("ps")
		}
		block(this)
	}
}
