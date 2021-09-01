package ps.api.user.atomizer.endpoint

import leight.client.sdk.Sdk
import leight.container.IContainer
import leight.rest.AbstractEndpoint
import leight.rest.Endpoint
import leight.rest.EndpointMethod
import ps.api.user.atomizer.dto.AtomizerDto
import ps.api.user.atomizer.dto.CreateDto

@Endpoint(
	method = EndpointMethod.POST,
)
@Sdk(
	request = CreateDto::class,
	response = AtomizerDto::class,
)
class CreateEndpoint(container: IContainer) : AbstractEndpoint(container)
