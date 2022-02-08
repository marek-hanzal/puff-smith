<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Dto\DtoServiceTrait;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;
use PuffSmith\Mixture\Dto\Comment\CommentFilterDto;
use PuffSmith\Mixture\Dto\Comment\CreateDto;

class MixtureCommentRepository extends AbstractRepository {
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
		$this->join($select, 'z_mixture', 'm', 'mixture_id');
		return $select;
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter CommentFilterDto */
		$filter = $query->filter;
		isset($filter->mixtureId) && $this->where($select, '$.mixture_id', $filter->mixtureId);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		$comment = $this->commentRepository->create($this->dtoService->fromArray(\PuffSmith\Comment\Dto\Create\CreateDto::class, [
			'comment' => $createDto->comment,
		]));
		$this->insert([
			'mixture_id' => $createDto->mixtureId,
			'comment_id' => $comment->id,
		]);
		return $comment;
	}
}
