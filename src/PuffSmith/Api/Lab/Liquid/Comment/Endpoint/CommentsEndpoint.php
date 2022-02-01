<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Liquid\Comment\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Liquid\Dto\Comment\CommentFilterDto;
use PuffSmith\Liquid\Dto\Comment\CommentOrderByDto;
use PuffSmith\Liquid\Repository\LiquidCommentRepositoryTrait;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;

class CommentsEndpoint extends AbstractQueryEndpoint {
	use LiquidCommentRepositoryTrait;
	use CommentMapperTrait;

	/**
	 * @param Query<CommentOrderByDto, CommentFilterDto> $query
	 *
	 * @return QueryResult<CommentDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->liquidCommentRepository->toResult($query, $this->commentMapper);
	}
}
