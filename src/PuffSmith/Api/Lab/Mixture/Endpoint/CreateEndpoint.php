<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mixture\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Mixture\Dto\Create\CreateDto;
use PuffSmith\Mixture\Dto\MixtureDto;
use PuffSmith\Mixture\Mapper\MixtureMapperTrait;
use PuffSmith\Mixture\Repository\MixtureRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use MixtureRepositoryTrait;
	use MixtureMapperTrait;

	public function post(CreateDto $createDto): MixtureDto {
		return $this->mixtureMapper->item($this->mixtureRepository->create($createDto));
	}
}
