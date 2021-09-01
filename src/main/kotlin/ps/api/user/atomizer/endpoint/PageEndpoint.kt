package ps.api.user.atomizer.endpoint

import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.rest.AbstractEndpoint
import leight.rest.Endpoint
import leight.rest.EndpointMethod

@Endpoint(
	method = EndpointMethod.POST,
)
@Sdk(
	request = Unit::class,
	response = Unit::class,
)
class PageEndpoint(container: IContainer) : AbstractEndpoint(container)
