<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Comment\Mapper\CommentMapperTrait;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;
use PuffSmith\Vape\Dto\Comment\VapeCommentDto;
use PuffSmith\Vape\Repository\VapeRepositoryTrait;

class VapeCommentMapper extends AbstractMapper {
	use VapeRepositoryTrait;
	use VapeMapperTrait;
	use CommentRepositoryTrait;
	use CommentMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(VapeCommentDto::class, [
			'id'        => $item->id,
			'vape'      => $this->vapeMapper->item($this->vapeRepository->find($item->vape_id)),
			'vapeId'    => $item->vape_id,
			'comment'   => $this->commentMapper->item($this->commentRepository->find($item->comment_id)),
			'commentId' => $item->comment_id,
		]);
	}
}
