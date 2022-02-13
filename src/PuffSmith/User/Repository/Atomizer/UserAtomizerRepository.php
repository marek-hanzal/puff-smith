<?php
declare(strict_types=1);

namespace PuffSmith\User\Repository\Atomizer;

use DateTime;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\User\Dto\Atomizer\CreateDto;
use PuffSmith\User\Dto\Atomizer\PatchDto;

class UserAtomizerRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct(['stamp' => IRepository::ORDER_DESC]);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'stamp'       => new DateTime(),
			'driptip_id'  => $createDto->driptipId,
			'atomizer_id' => $createDto->atomizerId,
			'user_id'     => $this->currentUserService->requiredId(),
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->change([
			'id'         => $patchDto->id,
			'driptip_id' => $patchDto->driptipId,
		]);
	}
}
