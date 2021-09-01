package leight.container

import leight.client.sdk.ISdkGenerator
import leight.client.sdk.SdkGenerator
import leight.encryption.IPasswordService
import leight.encryption.PasswordService
import leight.http.HttpIndex
import leight.http.HttpServer
import leight.http.IHttpIndex
import leight.http.IHttpServer
import leight.link.ILinkGenerator
import leight.link.LinkGenerator
import leight.page.IPageService
import leight.page.PageService
import leight.pool.IPool
import leight.pool.Pool
import leight.rest.EndpointInfo
import leight.rest.IEndpointInfo
import leight.role.EmptyRoleService
import leight.role.IRoleService
import leight.storage.IStorage
import leight.storage.Storage
import leight.upgrade.IUpgradeManager
import leight.upgrade.IVersionService
import leight.upgrade.UpgradeManager
import leight.upgrade.VersionService

object ContainerFactory {
	fun container() = Container().apply {
		registerSystemServices()
		registerStorageServices()
		registerHttpServices()
	}

	private fun IContainer.registerSystemServices() {
		service(IContainer::class) { this }
		service(IUpgradeManager::class) { UpgradeManager(this) }
		service(IVersionService::class) { VersionService(this) }
		service(ISdkGenerator::class) { SdkGenerator(this) }
		service(IRoleService::class) { EmptyRoleService(this) }
		service(IPasswordService::class) { PasswordService(this) }
		service(IPageService::class) { PageService(this) }
	}

	private fun IContainer.registerStorageServices() {
		service(IStorage::class) { Storage(this) }
		service(IPool::class) { Pool(this) }
	}

	private fun IContainer.registerHttpServices() {
		service(IHttpServer::class) { HttpServer(this) }
		service(ILinkGenerator::class) { LinkGenerator(this) }
		service(IHttpIndex::class) { HttpIndex(this) }
		service(IEndpointInfo::class) { EndpointInfo(this) }
	}
}
