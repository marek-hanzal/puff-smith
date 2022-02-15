<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Dto\DtoServiceTrait;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;
use PuffSmith\Liquid\Dto\Comment\CommentFilterDto;
use PuffSmith\Liquid\Dto\Comment\CreateDto;

class LiquidCommentRepository extends AbstractRepository {
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
		$this->join($select, 'z_liquid', 'l', 'liquid_id');
		return $select;
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter CommentFilterDto */
		$filter = $query->filter;
		isset($filter->liquidId) && $this->where($select, '$.liquid_id', $filter->liquidId);
		isset($filter->userId) && $this->where($select, 'c.user_id', $filter->userId);

		$this->toOrderBy($query->orderBy, $select);

		return $select->distinct();
	}

	public function create(CreateDto $createDto) {
		$comment = $this->commentRepository->create($this->dtoService->fromArray(\PuffSmith\Comment\Dto\Create\CreateDto::class, [
			'comment' => $createDto->comment,
		]));
		$this->insert([
			'liquid_id'  => $createDto->liquidId,
			'comment_id' => $comment->id,
		]);
		return $comment;
	}
}
