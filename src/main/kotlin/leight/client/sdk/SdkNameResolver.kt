package leight.client.sdk

import leight.container.AbstractService
import leight.container.IContainer
import kotlin.reflect.KClass

class SdkNameResolver(container: IContainer) : AbstractService(container) {
	fun filterName(string: String): String = string
		.replace("api.", "")
		.replace("dto.", "")
		.replace("module.", "")
		.replace("endpoint.", "")
		.replace("Endpoint", "")

	fun namespaceName(klass: KClass<*>): String = filterName(klass.qualifiedName!!).replace("." + klass.simpleName!!.replace("Endpoint", ""), "")

	fun namespaceParts(klass: KClass<*>) = namespaceName(klass).split(".")

	fun resolveClassName(source: KClass<*>, target: KClass<*>): String = when (target) {
		Unit::class -> {
			"never"
		}
		else -> {
			filterName(target.qualifiedName!!).replace(namespaceName(source) + ".", "")
		}
	}
}

fun IContainer.lazySdkNameResolver() = lazy<SdkNameResolver>()
