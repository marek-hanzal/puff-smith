<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Atomizer\Dto\Comment\AtomizerCommentDto;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;
use PuffSmith\Comment\Mapper\CommentMapperTrait;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;

class AtomizerCommentMapper extends AbstractMapper {
	use AtomizerRepositoryTrait;
	use AtomizerMapperTrait;
	use CommentRepositoryTrait;
	use CommentMapperTrait;

	public function item($item) {
		return $this->dtoService->fromArray(AtomizerCommentDto::class, [
			'id'         => $item->id,
			'atomizer'   => $this->atomizerMapper->item($this->atomizerRepository->find($item->atomizer_id)),
			'atomizerId' => $item->atomizer_id,
			'comment'    => $this->commentMapper->item($this->commentRepository->find($item->comment_id)),
			'commentId'  => $item->comment_id,
		]);
	}
}
