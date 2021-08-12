@file:Suppress("UNCHECKED_CAST")

package leight.container

import kotlin.reflect.KClass
import kotlin.reflect.KProperty

class LazyDelegate<T : Any>(private val container: IContainer) {
	operator fun getValue(thisRef: Any?, property: KProperty<*>): T = container.create(property.returnType.classifier as KClass<*>) as T
}
