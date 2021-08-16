package vapersdream.api.discovery.endpoint

import leight.container.IContainer
import leight.rest.AbstractEndpoint
import leight.rest.Endpoint
import leight.rest.EndpointMethod

@Endpoint(
	public = true,
	method = EndpointMethod.GET,
	roles = [],
)
class IndexEndpoint(container: IContainer) : AbstractEndpoint(container)
