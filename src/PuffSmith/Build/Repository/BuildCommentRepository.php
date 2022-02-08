<?php
declare(strict_types=1);

namespace PuffSmith\Build\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Dto\DtoServiceTrait;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Build\Dto\Comment\CommentFilterDto;
use PuffSmith\Build\Dto\Comment\CreateDto;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;

class BuildCommentRepository extends AbstractRepository {
	use CommentRepositoryTrait;
	use DtoServiceTrait;

	public function __construct() {
		parent::__construct(['stamp' => IRepository::ORDER_DESC]);
		$this->orderByMap = [
			'stamp' => 'c.stamp',
		];
	}

	public function select($fields = null): Select {
		$select = parent::select($fields);
		$this->join($select, 'z_comment', 'c', 'comment_id');
		$this->join($select, 'z_build', 'b', 'build_id');
		return $select;
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter CommentFilterDto */
		$filter = $query->filter;
		isset($filter->buildId) && $this->where($select, '$.build_id', $filter->buildId);
		isset($filter->atomizerIds) && $this->where($select, 'b.atomizer_id', 'in', $filter->atomizerIds);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
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
