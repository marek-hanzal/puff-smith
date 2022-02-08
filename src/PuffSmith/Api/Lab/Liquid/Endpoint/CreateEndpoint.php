<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Liquid\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Liquid\Dto\CreateDto;
use PuffSmith\Liquid\Dto\LiquidDto;
use PuffSmith\Liquid\Mapper\LiquidMapperTrait;
use PuffSmith\Liquid\Repository\LiquidRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use LiquidRepositoryTrait;
	use LiquidMapperTrait;

	public function post(CreateDto $createDto): LiquidDto {
		return $this->liquidMapper->item($this->liquidRepository->create($createDto));
	}
}
