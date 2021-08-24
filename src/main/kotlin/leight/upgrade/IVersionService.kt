package leight.upgrade

import leight.config.IConfigurable
import leight.container.IContainer

interface IVersionService : IConfigurable {
	/**
	 * return current version or null if an application is in zero state
	 */
	fun getVersion(): String?

	/**
	 * add a new upgrade
	 */
	fun upgrade(upgrade: IUpgrade): UpgradeEntity

	/**
	 * return collection of installed upgrades
	 */
	fun getCollection(): Iterable<UpgradeEntity>

	/**
	 * print currently installed versions (version per line)
	 */
	fun print()
}

fun IContainer.lazyVersionService() = lazy<IVersionService>()
