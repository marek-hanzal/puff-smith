package leight.rest

import leight.container.AbstractService
import leight.container.IContainer

abstract class AbstractEndpointInfo(container: IContainer) : AbstractService(container), IEndpointInfo
