<?php
declare(strict_types=1);

namespace PuffSmith\Comment\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Comment\Dto\CommentDto;

class CommentMapper extends AbstractMapper {
	public function item($item) {
		return $this->dtoService->fromArray(CommentDto::class, [
			'id'      => $item->id,
			'stamp'   => $this->isoDateNull($item->stamp),
			'comment' => $item->comment,
		]);
	}
}
