package ps.api.user.atomizer.endpoint

import leight.client.sdk.annotation.Sdk
import leight.client.sdk.annotation.TypeClass
import leight.container.IContainer
import leight.rest.AbstractEndpoint
import leight.rest.Endpoint
import leight.rest.EndpointMethod
import ps.api.user.atomizer.dto.CreateDto
import ps.atomizer.dto.AtomizerDto

@Endpoint(
	method = EndpointMethod.POST,
)
@Sdk(
	request = TypeClass(CreateDto::class),
	response = TypeClass(AtomizerDto::class),
)
class CreateEndpoint(container: IContainer) : AbstractEndpoint(container)
