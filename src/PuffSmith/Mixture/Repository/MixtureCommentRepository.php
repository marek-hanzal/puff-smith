<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Dto\DtoServiceTrait;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use PuffSmith\Mixture\Dto\Comment\CommentFilterDto;
use PuffSmith\Mixture\Dto\Comment\CreateDto;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;
use function array_map;

class MixtureCommentRepository extends AbstractRepository {
	use CommentRepositoryTrait;
	use DtoServiceTrait;

	public function toQuery(Query $query): Select {
		$select = $this->select('c.*');
		$this->join($select, 'z_comment', 'c', 'comment_id');

		/** @var $filter CommentFilterDto */
		$filter = $query->filter;
		isset($filter->mixtureId) && $this->where($select, '$.mixture_id', $filter->mixtureId);

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
			'mixture_id'   => $createDto->mixtureId,
			'comment_id' => $comment->id,
		]);
		return $comment;
	}
}
