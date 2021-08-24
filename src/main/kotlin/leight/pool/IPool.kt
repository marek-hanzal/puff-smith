package leight.pool

import leight.config.IConfigurable
import leight.container.IContainer
import javax.sql.DataSource

interface IPool : IConfigurable {
	fun source(): DataSource
}

fun IContainer.lazyPool() = lazy<IPool>()
