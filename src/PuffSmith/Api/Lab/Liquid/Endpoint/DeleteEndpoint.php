<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Liquid\Endpoint;

use Edde\Rest\Endpoint\AbstractDeleteEndpoint;
use PuffSmith\Liquid\Dto\LiquidDto;
use PuffSmith\Liquid\Dto\Delete\DeleteDto;
use PuffSmith\Liquid\Mapper\LiquidMapperTrait;
use PuffSmith\Liquid\Repository\LiquidRepositoryTrait;

class DeleteEndpoint extends AbstractDeleteEndpoint {
	use LiquidRepositoryTrait;
	use LiquidMapperTrait;

	public function post(DeleteDto $deleteDto): LiquidDto {
		return $this->liquidMapper->item($this->liquidRepository->delete($deleteDto->id));
	}
}
