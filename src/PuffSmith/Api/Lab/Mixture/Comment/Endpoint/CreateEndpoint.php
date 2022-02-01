<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mixture\Comment\Endpoint;

use Edde\Rest\Endpoint\AbstractCreateEndpoint;
use PuffSmith\Mixture\Dto\Comment\CreateDto;
use PuffSmith\Mixture\Repository\MixtureCommentRepositoryTrait;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;

class CreateEndpoint extends AbstractCreateEndpoint {
	use MixtureCommentRepositoryTrait;
	use CommentMapperTrait;

	public function post(CreateDto $createDto): CommentDto {
		return $this->commentMapper->item($this->mixtureCommentRepository->create($createDto));
	}
}
