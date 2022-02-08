<?php
declare(strict_types=1);

namespace PuffSmith\Liquid\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Comment\Mapper\CommentMapperTrait;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;
use PuffSmith\Liquid\Dto\Comment\LiquidCommentDto;
use PuffSmith\Liquid\Repository\LiquidRepositoryTrait;

class LiquidCommentMapper extends AbstractMapper {
	use LiquidRepositoryTrait;
	use LiquidMapperTrait;
	use CommentRepositoryTrait;
	use CommentMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(LiquidCommentDto::class, [
			'id'        => $item->id,
			'liquid'    => $this->liquidMapper->item($this->liquidRepository->find($item->liquid_id)),
			'liquidId'  => $item->liquid_id,
			'comment'   => $this->commentMapper->item($this->commentRepository->find($item->comment_id)),
			'commentId' => $item->comment_id,
		]);
	}
}
