<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Atomizer\Comment\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Atomizer\Dto\Comment\CreateDto;
use PuffSmith\Atomizer\Repository\AtomizerCommentRepositoryTrait;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use AtomizerCommentRepositoryTrait;
	use CommentMapperTrait;

	public function post(CreateDto $createDto): CommentDto {
		return $this->commentMapper->item($this->atomizerCommentRepository->create($createDto));
	}
}
