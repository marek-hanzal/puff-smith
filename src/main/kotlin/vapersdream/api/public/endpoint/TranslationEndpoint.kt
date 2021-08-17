package vapersdream.api.public.endpoint

import leight.container.IContainer
import leight.rest.AbstractEndpoint
import leight.rest.Endpoint
import leight.rest.EndpointMethod

@Endpoint(
	public = true,
	method = EndpointMethod.GET,
)
class TranslationEndpoint(container: IContainer) : AbstractEndpoint(container)
