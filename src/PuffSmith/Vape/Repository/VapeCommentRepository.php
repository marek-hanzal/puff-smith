<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Dto\DtoServiceTrait;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;
use PuffSmith\Vape\Dto\Comment\CommentFilterDto;
use PuffSmith\Vape\Dto\Comment\CreateDto;

class VapeCommentRepository extends AbstractRepository {
	use CommentRepositoryTrait;
	use DtoServiceTrait;

	public function __construct() {
		parent::__construct(['stamp' => IRepository::ORDER_DESC]);
		$this->orderByMap = [
			'stamp' => 'c.stamp',
		];
	}

	public function toQuery(Query $query): Select {
		$select = $this->select('c.*');
		$this->join($select, 'z_comment', 'c', '$.comment_id');
		$this->join($select, 'z_vape', 'v', '$.vape_id');
		$this->join($select, 'z_build', 'b', 'v.build_id');

		/** @var $filter CommentFilterDto */
		$filter = $query->filter;
		isset($filter->vapeId) && $this->where($select, '$.vape_id', $filter->vapeId);
		!empty($filter->buildIds) && $this->where($select, 'v.build_id', 'in', $filter->buildIds);
		!empty($filter->atomizerIds) && $this->where($select, 'b.atomizer_id', 'in', $filter->atomizerIds);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		$comment = $this->commentRepository->create($this->dtoService->fromArray(\PuffSmith\Comment\Dto\Create\CreateDto::class, [
			'comment' => $createDto->comment,
		]));
		$this->insert([
			'vape_id'    => $createDto->vapeId,
			'comment_id' => $comment->id,
		]);
		return $comment;
	}
}
