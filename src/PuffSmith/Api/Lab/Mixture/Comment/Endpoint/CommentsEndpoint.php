<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mixture\Comment\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Mixture\Dto\Comment\CommentFilterDto;
use PuffSmith\Mixture\Dto\Comment\CommentOrderByDto;
use PuffSmith\Mixture\Repository\MixtureCommentRepositoryTrait;
use PuffSmith\Comment\Dto\CommentDto;
use PuffSmith\Comment\Mapper\CommentMapperTrait;

class CommentsEndpoint extends AbstractQueryEndpoint {
	use MixtureCommentRepositoryTrait;
	use CommentMapperTrait;

	/**
	 * @param Query<CommentOrderByDto, CommentFilterDto> $query
	 *
	 * @return QueryResult<CommentDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->mixtureCommentRepository->toResult($query, $this->commentMapper);
	}
}
