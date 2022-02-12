<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mod\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\Mod\Dto\ModDto;
use PuffSmith\Mod\Dto\PatchDto;
use PuffSmith\Mod\Mapper\ModMapperTrait;
use PuffSmith\Mod\Repository\ModRepositoryTrait;

class PatchEndpoint extends AbstractPatchEndpoint {
	use ModRepositoryTrait;
	use ModMapperTrait;

	public function patch(PatchDto $patchDto): ModDto {
		return $this->modMapper->item($this->modRepository->update($patchDto));
	}
}
