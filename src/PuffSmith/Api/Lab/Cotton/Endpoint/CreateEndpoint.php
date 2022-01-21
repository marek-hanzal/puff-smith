<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Cotton\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Cotton\Dto\CottonDto;
use PuffSmith\Cotton\Dto\Create\CreateDto;
use PuffSmith\Cotton\Mapper\CottonMapperTrait;
use PuffSmith\Cotton\Repository\CottonRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use CottonRepositoryTrait;
	use CottonMapperTrait;

	public function post(CreateDto $createDto): CottonDto {
		return $this->cottonMapper->item($this->cottonRepository->create($createDto));
	}
}
