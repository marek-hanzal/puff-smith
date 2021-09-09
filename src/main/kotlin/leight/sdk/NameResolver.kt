package leight.sdk

import leight.container.AbstractService
import leight.container.IContainer
import kotlin.reflect.KClass

class NameResolver(container: IContainer) : AbstractService(container) {
	fun simpleName(klass: KClass<*>): String = when (klass) {
		Unit::class -> {
			"void"
		}
		else -> {
			klass.simpleName!!
				.replace("api.", "")
				.replace("dto.", "")
				.replace("module.", "")
				.replace("endpoint.", "")
				.replace("Endpoint", "")
		}
	}
}

fun IContainer.lazyNameResolver() = lazy<NameResolver>()
