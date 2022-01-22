<?php
declare(strict_types=1);

namespace PuffSmith\Mixture\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Mixture\Dto\Create\CreateDto;

class MixtureRepository extends AbstractRepository {
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
			'mixed'      => $createDto->mixed,
			'expires'    => $createDto->expires,
			'liquid_id'  => $createDto->liquidId,
			'booster_id' => $createDto->boosterId,
			'base_id'    => $createDto->baseId,
		]);
	}
}
