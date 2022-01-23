<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Driptip\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Driptip\Dto\Create\CreateDto;
use PuffSmith\Driptip\Dto\DriptipDto;
use PuffSmith\Driptip\Mapper\DriptipMapperTrait;
use PuffSmith\Driptip\Repository\DriptipRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use DriptipRepositoryTrait;
	use DriptipMapperTrait;

	public function post(CreateDto $createDto): DriptipDto {
		return $this->driptipMapper->item($this->driptipRepository->create($createDto));
	}
}
