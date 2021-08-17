package leight.mapper

import leight.container.AbstractService
import leight.container.IContainer
import leight.storage.IStorage

abstract class AbstractActionMapper<TRequest, TResponse, TException>(container: IContainer) : AbstractService(container), IActionMapper<TRequest, TResponse, TException> {
	val storage: IStorage by container.lazy()
}
