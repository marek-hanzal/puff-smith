<?php
declare(strict_types=1);

namespace PuffSmith\Build\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Build\Dto\Comment\BuildCommentDto;
use PuffSmith\Build\Repository\BuildRepositoryTrait;
use PuffSmith\Comment\Mapper\CommentMapperTrait;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;

class BuildCommentMapper extends AbstractMapper {
	use BuildRepositoryTrait;
	use BuildMapperTrait;
	use CommentRepositoryTrait;
	use CommentMapperTrait;

	public function item($item) {
		return $this->dtoService->fromArray(BuildCommentDto::class, [
			'id'        => $item->id,
			'build'     => $this->buildMapper->item($this->buildRepository->find($item->build_id)),
			'buildId'   => $item->build_id,
			'comment'   => $this->commentMapper->item($this->commentRepository->find($item->comment_id)),
			'commentId' => $item->comment_id,
		]);
	}
}
