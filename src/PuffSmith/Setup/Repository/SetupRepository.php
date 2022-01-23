<?php
declare(strict_types=1);

namespace PuffSmith\Setup\Repository;

use DateTime;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Setup\Dto\Create\CreateDto;

class SetupRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct([
			'created' => IRepository::ORDER_DESC,
			'name'    => IRepository::ORDER_ASC,
		], ['z_setup_name_unique']);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'        => $createDto->name,
			'description' => $createDto->description,
			'build_id'    => $createDto->buildId,
			'mod_id'      => $createDto->modId,
			'created'     => new DateTime(),
			'user_id'     => $this->currentUserService->requiredId(),
		]);
	}
}
