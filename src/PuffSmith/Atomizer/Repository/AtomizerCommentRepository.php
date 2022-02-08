<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Dto\DtoServiceTrait;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Atomizer\Dto\Comment\CommentFilterDto;
use PuffSmith\Atomizer\Dto\Comment\CreateDto;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;

class AtomizerCommentRepository extends AbstractRepository {
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
		$this->join($select, 'z_atomizer', 'b', 'atomizer_id');
		return $select;
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter CommentFilterDto */
		$filter = $query->filter;
		isset($filter->atomizerId) && $this->where($select, '$.atomizer_id', $filter->atomizerId);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		$comment = $this->commentRepository->create($this->dtoService->fromArray(\PuffSmith\Comment\Dto\Create\CreateDto::class, [
			'comment' => $createDto->comment,
		]));
		$this->insert([
			'atomizer_id' => $createDto->atomizerId,
			'comment_id'  => $comment->id,
		]);
		return $comment;
	}
}
