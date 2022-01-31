<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Comment\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Dto\CommentFilterDto;
use PuffSmith\Comment\Dto\CommentOrderByDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;

class CommentsEndpoint extends AbstractQueryEndpoint {
	use CommentRepositoryTrait;
	use CommentMapperTrait;

	/**
	 * @param Query<CommentOrderByDto, CommentFilterDto> $query
	 *
	 * @return QueryResult<CommentDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->commentRepository->toResult($query, $this->commentMapper);
	}
}
