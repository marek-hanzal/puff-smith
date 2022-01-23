<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Vape\Dto\Create\CreateDto;

class VapeRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct(['stamp' => IRepository::ORDER_DESC]);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'user_id' => $this->currentUserService->requiredId(),
		]);
	}
}
