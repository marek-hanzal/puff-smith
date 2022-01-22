<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Booster\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Booster\Dto\BoosterDto;
use PuffSmith\Booster\Dto\Create\CreateDto;
use PuffSmith\Booster\Mapper\BoosterMapperTrait;
use PuffSmith\Booster\Repository\BoosterRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use BoosterRepositoryTrait;
	use BoosterMapperTrait;

	public function post(CreateDto $createDto): BoosterDto {
		return $this->boosterMapper->item($this->boosterRepository->create($createDto));
	}
}
