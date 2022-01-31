<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Comment\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Build\Dto\Comment\CreateDto;
use PuffSmith\Build\Repository\BuildCommentRepositoryTrait;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use BuildCommentRepositoryTrait;
	use CommentMapperTrait;

	public function post(CreateDto $createDto): CommentDto {
		return $this->commentMapper->item($this->buildCommentRepository->create($createDto));
	}
}
