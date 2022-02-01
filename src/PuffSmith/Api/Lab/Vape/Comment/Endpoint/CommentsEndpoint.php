<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vape\Comment\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Vape\Dto\Comment\CommentFilterDto;
use PuffSmith\Vape\Dto\Comment\CommentOrderByDto;
use PuffSmith\Vape\Repository\VapeCommentRepositoryTrait;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;

class CommentsEndpoint extends AbstractQueryEndpoint {
	use VapeCommentRepositoryTrait;
	use CommentMapperTrait;

	/**
	 * @param Query<CommentOrderByDto, CommentFilterDto> $query
	 *
	 * @return QueryResult<CommentDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->vapeCommentRepository->toResult($query, $this->commentMapper);
	}
}
