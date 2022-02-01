<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vape\Comment\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Vape\Dto\Comment\CreateDto;
use PuffSmith\Vape\Repository\VapeCommentRepositoryTrait;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use VapeCommentRepositoryTrait;
	use CommentMapperTrait;

	public function post(CreateDto $createDto): CommentDto {
		return $this->commentMapper->item($this->vapeCommentRepository->create($createDto));
	}
}
