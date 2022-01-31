<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Comment\Endpoint;

use Edde\Rest\Endpoint\AbstractDeleteEndpoint;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Dto\Delete\DeleteDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;

class DeleteEndpoint extends AbstractDeleteEndpoint {
	use CommentRepositoryTrait;
	use CommentMapperTrait;

	public function post(DeleteDto $deleteDto): CommentDto {
		return $this->commentMapper->item($this->commentRepository->delete($deleteDto->id));
	}
}
