<?php
declare(strict_types=1);

namespace PuffSmith\Comment\Repository;

use DateTime;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Comment\Dto\Create\CreateDto;
use PuffSmith\Comment\Dto\Patch\PatchDto;

class CommentRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct(['stamp' => IRepository::ORDER_DESC]);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'stamp'   => new DateTime(),
			'comment' => $createDto->comment,
			'user_id' => $this->currentUserService->requiredId(),
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->change([
			'id'      => $patchDto->id,
			'comment' => $patchDto->comment,
		]);
	}
}
