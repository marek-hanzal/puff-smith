<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Comment\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Build\Dto\Comment\BuildCommentDto;
use PuffSmith\Build\Dto\Comment\CommentFilterDto;
use PuffSmith\Build\Dto\Comment\CommentOrderByDto;
use PuffSmith\Build\Mapper\BuildCommentMapperTrait;
use PuffSmith\Build\Repository\BuildCommentRepositoryTrait;

class CommentsEndpoint extends AbstractQueryEndpoint {
	use BuildCommentRepositoryTrait;
	use BuildCommentMapperTrait;

	/**
	 * @param Query<CommentOrderByDto, CommentFilterDto> $query
	 *
	 * @return QueryResult<BuildCommentDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->buildCommentRepository->toResult($query->withFilter(['userId' => $this->currentUserService->requiredId()]), $this->buildCommentMapper);
	}
}
