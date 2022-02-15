<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mixture\Comment\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Mixture\Dto\Comment\CommentFilterDto;
use PuffSmith\Mixture\Dto\Comment\CommentOrderByDto;
use PuffSmith\Mixture\Dto\Comment\MixtureCommentDto;
use PuffSmith\Mixture\Mapper\MixtureCommentMapperTrait;
use PuffSmith\Mixture\Repository\MixtureCommentRepositoryTrait;

class CommentsEndpoint extends AbstractQueryEndpoint {
	use MixtureCommentRepositoryTrait;
	use MixtureCommentMapperTrait;

	/**
	 * @param Query<CommentOrderByDto, CommentFilterDto> $query
	 *
	 * @return QueryResult<MixtureCommentDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->mixtureCommentRepository->toResult($query->withFilter(['userId' => $this->currentUserService->requiredId()]), $this->mixtureCommentMapper);
	}
}
