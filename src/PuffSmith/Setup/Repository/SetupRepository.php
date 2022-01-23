<?php
declare(strict_types=1);

namespace PuffSmith\Setup\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Setup\Dto\Create\CreateDto;

class SetupRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['z_setup_name_unique']);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'        => $createDto->name,
			'description' => $createDto->description,
			'driptip_id'  => $createDto->driptipId,
			'build_id'    => $createDto->buildId,
			'mod_id'      => $createDto->modId,
			'user_id'     => $this->currentUserService->requiredId(),
		]);
	}
}
