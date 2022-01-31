<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Comment\Endpoint;

use Edde\Rest\Endpoint\AbstractPatchEndpoint;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Dto\Patch\PatchDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;

class PatchEndpoint extends AbstractPatchEndpoint {
	use CommentRepositoryTrait;
	use CommentMapperTrait;

	public function patch(PatchDto $patchDto): CommentDto {
		return $this->commentMapper->item($this->commentRepository->update($patchDto));
	}
}
