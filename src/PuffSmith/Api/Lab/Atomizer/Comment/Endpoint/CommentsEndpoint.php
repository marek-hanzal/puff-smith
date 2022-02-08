<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Atomizer\Comment\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Atomizer\Dto\Comment\AtomizerCommentDto;
use PuffSmith\Atomizer\Dto\Comment\CommentFilterDto;
use PuffSmith\Atomizer\Dto\Comment\CommentOrderByDto;
use PuffSmith\Atomizer\Mapper\AtomizerCommentMapperTrait;
use PuffSmith\Atomizer\Repository\AtomizerCommentRepositoryTrait;

class CommentsEndpoint extends AbstractQueryEndpoint {
	use AtomizerCommentRepositoryTrait;
	use AtomizerCommentMapperTrait;

	/**
	 * @param Query<CommentOrderByDto, CommentFilterDto> $query
	 *
	 * @return QueryResult<AtomizerCommentDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->atomizerCommentRepository->toResult($query, $this->atomizerCommentMapper);
	}
}
