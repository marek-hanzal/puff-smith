<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Repository;

use DateTime;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Vape\Dto\Create\CreateDto;
use PuffSmith\Vape\Dto\Patch\PatchDto;

class VapeRepository extends AbstractRepository {
	use CurrentUserServiceTrait;

	public function __construct() {
		parent::__construct(['stamp' => IRepository::ORDER_DESC]);
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'setup_id'   => $createDto->setupId,
			'mixture_id' => $createDto->mixtureId,
			'driptip_id' => $createDto->driptipId,
			'rating'  => $createDto->rating,
			'taste'   => $createDto->taste,
			'fruits'  => $createDto->fruits,
			'tobacco' => $createDto->tobacco,
			'cakes'   => $createDto->cakes,
			'complex' => $createDto->complex,
			'fresh'   => $createDto->fresh,
			'clouds'  => $createDto->clouds,
			'mtl'     => $createDto->mtl,
			'dl'      => $createDto->dl,
			'dryhit'  => $createDto->dryhit,
			'leaks'   => $createDto->leaks,
			'airflow' => $createDto->airflow,
			'juice'   => $createDto->juice,
			'power'   => $createDto->power,
			'tc'      => $createDto->tc,
			'stamp'   => new DateTime(),
			'user_id' => $this->currentUserService->requiredId(),
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->patch([
			'id'         => $patchDto->id,
			'setup_id'   => $patchDto->setupId,
			'mixture_id' => $patchDto->mixtureId,
			'driptip_id' => $patchDto->driptipId,
			'rating'     => $patchDto->rating,
			'taste'      => $patchDto->taste,
			'fruits'     => $patchDto->fruits,
			'tobacco'    => $patchDto->tobacco,
			'cakes'      => $patchDto->cakes,
			'complex'    => $patchDto->complex,
			'fresh'      => $patchDto->fresh,
			'clouds'     => $patchDto->clouds,
			'mtl'        => $patchDto->mtl,
			'dl'         => $patchDto->dl,
			'dryhit'     => $patchDto->dryhit,
			'leaks'      => $patchDto->leaks,
			'airflow'    => $patchDto->airflow,
			'juice'      => $patchDto->juice,
			'power'      => $patchDto->power,
			'tc'         => $patchDto->tc,
		]);
	}
}
