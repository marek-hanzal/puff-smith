<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mod\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Mod\Dto\Create\CreateDto;
use PuffSmith\Mod\Dto\ModDto;
use PuffSmith\Mod\Mapper\ModMapperTrait;
use PuffSmith\Mod\Repository\ModRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use ModRepositoryTrait;
	use ModMapperTrait;

	public function post(CreateDto $createDto): ModDto {
		return $this->modMapper->item($this->modRepository->create($createDto));
	}
}
