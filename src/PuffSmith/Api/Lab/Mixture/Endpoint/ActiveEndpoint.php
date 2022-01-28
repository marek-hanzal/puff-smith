<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mixture\Endpoint;

use Edde\Rest\Endpoint\AbstractMutationEndpoint;
use PuffSmith\Api\Lab\Mixture\Dto\ActiveDto;
use PuffSmith\Mixture\Dto\MixtureDto;
use PuffSmith\Mixture\Mapper\MixtureMapperTrait;
use PuffSmith\Mixture\Repository\MixtureRepositoryTrait;

class ActiveEndpoint extends AbstractMutationEndpoint {
	use MixtureRepositoryTrait;
	use MixtureMapperTrait;

	public function post(ActiveDto $activeDto): MixtureDto {
		return $this->mixtureMapper->item($this->mixtureRepository->change([
			'id'     => $activeDto->id,
			'active' => $activeDto->active,
		]));
	}
}
