<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Comment\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;

/**
 * @query commentId
 */
class CommentEndpoint extends AbstractFetchEndpoint {
	use CommentRepositoryTrait;
	use CommentMapperTrait;

	public function get(): CommentDto {
		return $this->commentMapper->item($this->commentRepository->find($this->param('commentId')));
	}
}
