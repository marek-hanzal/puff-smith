<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Atomizer\Comment\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Atomizer\Dto\Comment\CommentFilterDto;
use PuffSmith\Atomizer\Dto\Comment\CommentOrderByDto;
use PuffSmith\Atomizer\Repository\AtomizerCommentRepositoryTrait;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;

class CommentsEndpoint extends AbstractQueryEndpoint {
	use AtomizerCommentRepositoryTrait;
	use CommentMapperTrait;

	/**
	 * @param Query<CommentOrderByDto, CommentFilterDto> $query
	 *
	 * @return QueryResult<CommentDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->atomizerCommentRepository->toResult($query, $this->commentMapper);
	}
}
