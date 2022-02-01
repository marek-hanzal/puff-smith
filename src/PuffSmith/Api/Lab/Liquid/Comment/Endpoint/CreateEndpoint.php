<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Liquid\Comment\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Liquid\Dto\Comment\CreateDto;
use PuffSmith\Liquid\Repository\LiquidCommentRepositoryTrait;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use LiquidCommentRepositoryTrait;
	use CommentMapperTrait;

	public function post(CreateDto $createDto): CommentDto {
		return $this->commentMapper->item($this->liquidCommentRepository->create($createDto));
	}
}
