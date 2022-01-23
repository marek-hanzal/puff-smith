<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Driptip\Dto\Create\CreateDto;

class DriptipRepository extends AbstractRepository {
	use CurrentUserServiceTrait;
	use DriptipMaterialRepositoryTrait;

	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['z_driptip_code_unique']);
	}

	public function create(CreateDto $createDto) {
		$driptip = $this->insert([
			'name'      => $createDto->name,
			'vendor_id' => $createDto->vendorId,
			'user_id'   => $this->currentUserService->requiredId(),
		]);
		$this->driptipMaterialRepository->sync($driptip->id, $createDto->materials);
		return $driptip;
	}
}
