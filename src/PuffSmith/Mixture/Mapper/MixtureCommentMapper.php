<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Comment\Mapper\CommentMapperTrait;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;
use PuffSmith\Mixture\Dto\Comment\MixtureCommentDto;
use PuffSmith\Mixture\Repository\MixtureRepositoryTrait;

class MixtureCommentMapper extends AbstractMapper {
	use MixtureRepositoryTrait;
	use MixtureMapperTrait;
	use CommentRepositoryTrait;
	use CommentMapperTrait;

	public function item($item) {
		return $this->dtoService->fromArray(MixtureCommentDto::class, [
			'id'        => $item->id,
			'mixture'   => $this->mixtureMapper->item($this->mixtureRepository->find($item->mixture_id)),
			'mixtureId' => $item->mixture_id,
			'comment'   => $this->commentMapper->item($this->commentRepository->find($item->comment_id)),
			'commentId' => $item->comment_id,
		]);
	}
}
