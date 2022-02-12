<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Cotton\Endpoint;

use Edde\Rest\Endpoint\AbstractDeleteEndpoint;
use PuffSmith\Cotton\Dto\DeleteDto;
use PuffSmith\Cotton\Dto\CottonDto;
use PuffSmith\Cotton\Mapper\CottonMapperTrait;
use PuffSmith\Cotton\Repository\CottonRepositoryTrait;

class DeleteEndpoint extends AbstractDeleteEndpoint {
	use CottonRepositoryTrait;
	use CottonMapperTrait;

	public function post(DeleteDto $deleteDto): CottonDto {
		return $this->cottonMapper->item($this->cottonRepository->delete($deleteDto->id));
	}
}
