<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vape\Comment\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Vape\Dto\Comment\CommentFilterDto;
use PuffSmith\Vape\Dto\Comment\CommentOrderByDto;
use PuffSmith\Vape\Dto\Comment\VapeCommentDto;
use PuffSmith\Vape\Mapper\VapeCommentMapperTrait;
use PuffSmith\Vape\Repository\VapeCommentRepositoryTrait;

class CommentsEndpoint extends AbstractQueryEndpoint {
	use VapeCommentRepositoryTrait;
	use VapeCommentMapperTrait;

	/**
	 * @param Query<CommentOrderByDto, CommentFilterDto> $query
	 *
	 * @return QueryResult<VapeCommentDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->vapeCommentRepository->toResult($query, $this->vapeCommentMapper);
	}
}
