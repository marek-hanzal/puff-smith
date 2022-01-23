<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Repository;

use DateTime;
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
			'setup_id'   => $createDto->setupId,
			'mixture_id' => $createDto->mixtureId,
			'driptip_id' => $createDto->driptipId,
			'rating'     => $createDto->rating,
			'taste'      => $createDto->taste,
			'fruits'     => $createDto->fruits,
			'tobacco'    => $createDto->tobacco,
			'cakes'      => $createDto->cakes,
			'complex'    => $createDto->complex,
			'fresh'      => $createDto->fresh,
			'clouds'     => $createDto->clouds,
			'mtl'        => $createDto->mtl,
			'dl'         => $createDto->dl,
			'airflow'    => $createDto->airflow,
			'juice'      => $createDto->juice,
			'power'      => $createDto->power,
			'tc'         => $createDto->tc,
			'stamp'      => new DateTime(),
			'user_id'    => $this->currentUserService->requiredId(),
		]);
	}
}
