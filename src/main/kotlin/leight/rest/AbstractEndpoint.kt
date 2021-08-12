package leight.rest

import leight.container.AbstractService
import leight.container.IContainer

abstract class AbstractEndpoint(container: IContainer) : AbstractService(container), IEndpoint
