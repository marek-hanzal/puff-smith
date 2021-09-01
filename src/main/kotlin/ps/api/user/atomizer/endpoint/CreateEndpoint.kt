package ps.api.user.atomizer.endpoint

import leight.client.sdk.annotation.Sdk
import leight.client.sdk.annotation.SdkType
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
	request = SdkType(CreateDto::class),
	response = SdkType(AtomizerDto::class),
)
class CreateEndpoint(container: IContainer) : AbstractEndpoint(container)
