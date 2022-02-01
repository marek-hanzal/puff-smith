<?php
declare(strict_types=1);

namespace PuffSmith\Build\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Dto\DtoServiceTrait;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use PuffSmith\Build\Dto\Comment\CommentFilterDto;
use PuffSmith\Build\Dto\Comment\CreateDto;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;
use function array_map;

class BuildCommentRepository extends AbstractRepository {
	use CommentRepositoryTrait;
	use DtoServiceTrait;

	public function toQuery(Query $query): Select {
		$select = $this->select('c.*');
		$this->join($select, 'z_comment', 'c', 'comment_id');

		/** @var $filter CommentFilterDto */
		$filter = $query->filter;
		isset($filter->buildId) && $this->where($select, '$.build_id', $filter->buildId);

		$select->orderBy(['c.stamp' => 'desc']);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	protected function toByMap(array $orderBy): array {
		return array_map(static function (string $orderBy) {
			static $map = [
				'stamp' => 'c.stamp',
			];
			return $map[$orderBy] ?? $orderBy;
		}, $orderBy);
	}

	public function create(CreateDto $createDto) {
		$comment = $this->commentRepository->create($this->dtoService->fromArray(\PuffSmith\Comment\Dto\Create\CreateDto::class, [
			'comment' => $createDto->comment,
		]));
		$this->insert([
			'build_id'   => $createDto->buildId,
			'comment_id' => $comment->id,
		]);
		return $comment;
	}
}
