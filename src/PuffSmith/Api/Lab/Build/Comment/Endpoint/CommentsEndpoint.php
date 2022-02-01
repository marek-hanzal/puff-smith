<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Comment\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Build\Dto\Comment\CommentFilterDto;
use PuffSmith\Build\Dto\Comment\CommentOrderByDto;
use PuffSmith\Build\Repository\BuildCommentRepositoryTrait;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;

class CommentsEndpoint extends AbstractQueryEndpoint {
	use BuildCommentRepositoryTrait;
	use CommentMapperTrait;

	/**
	 * @param Query<CommentOrderByDto, CommentFilterDto> $query
	 *
	 * @return QueryResult<CommentDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->buildCommentRepository->toResult($query, $this->commentMapper);
	}
}
