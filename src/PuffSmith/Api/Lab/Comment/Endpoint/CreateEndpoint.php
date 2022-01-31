<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Comment\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Dto\Create\CreateDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use CommentRepositoryTrait;
	use CommentMapperTrait;

	public function post(CreateDto $createDto): CommentDto {
		return $this->commentMapper->item($this->commentRepository->create($createDto));
	}
}
