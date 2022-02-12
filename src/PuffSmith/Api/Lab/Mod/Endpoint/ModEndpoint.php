<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mod\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Mod\Dto\ModDto;
use PuffSmith\Mod\Mapper\ModMapperTrait;
use PuffSmith\Mod\Repository\ModRepositoryTrait;

/**
 * @query modId
 */
class ModEndpoint extends AbstractFetchEndpoint {
	use ModRepositoryTrait;
	use ModMapperTrait;

	public function get(): ModDto {
		return $this->modMapper->item($this->modRepository->find($this->param('modId')));
	}
}
