<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Repository;

use DateTime;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Mixture\Dto\Create\CreateDto;

class MixtureRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct(['mixed' => IRepository::ORDER_DESC], [
			'z_mixture_name_unique',
			'z_mixture_code_unique',
		]);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'       => $createDto->name,
			'code'       => $createDto->code,
			'steep'      => $createDto->steep,
			'pg'         => $createDto->pg,
			'vg'         => $createDto->vg,
			'nicotine'   => $createDto->nicotine,
			'volume'     => $createDto->volume,
			'mixed'      => (new DateTime($createDto->mixed))->format('Y-m-d'),
			'expires'    => isset($createDto->expires) ? (new DateTime($createDto->expires))->format('Y-m-d') : null,
			'liquid_id'  => $createDto->liquidId,
			'booster_id' => $createDto->boosterId,
			'base_id'    => $createDto->baseId,
			'user_id'    => $this->currentUserService->requiredId(),
		]);
	}
}
