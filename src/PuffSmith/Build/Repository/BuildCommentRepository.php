<?php
declare(strict_types=1);

namespace PuffSmith\Build\Repository;

use Edde\Dto\DtoServiceTrait;
use Edde\Repository\AbstractRepository;
use PuffSmith\Build\Dto\Comment\CreateDto;
use PuffSmith\Comment\Repository\CommentRepositoryTrait;

class BuildCommentRepository extends AbstractRepository {
	use CommentRepositoryTrait;
	use DtoServiceTrait;

	public function create(CreateDto $createDto) {
		$comment = $this->commentRepository->create($this->dtoService->fromArray(\PuffSmith\Comment\Dto\Create\CreateDto::class, [
			'comment' => $createDto->comment,
		]));
		$this->insert([
			'build_id'   => $createDto->buildId,
			'comment_id' => $comment->id,
		]);
		return $comment;
	}
}
