<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mod\Endpoint;

use Edde\Rest\Endpoint\AbstractDeleteEndpoint;
use PuffSmith\Mod\Dto\DeleteDto;
use PuffSmith\Mod\Dto\ModDto;
use PuffSmith\Mod\Mapper\ModMapperTrait;
use PuffSmith\Mod\Repository\ModRepositoryTrait;

class DeleteEndpoint extends AbstractDeleteEndpoint {
	use ModRepositoryTrait;
	use ModMapperTrait;

	public function post(DeleteDto $deleteDto): ModDto {
		return $this->modMapper->item($this->modRepository->delete($deleteDto->id));
	}
}
