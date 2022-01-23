<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Driptip\Mapper\DriptipMapperTrait;
use PuffSmith\Driptip\Repository\DriptipRepositoryTrait;
use PuffSmith\Mixture\Mapper\MixtureMapperTrait;
use PuffSmith\Mixture\Repository\MixtureRepositoryTrait;
use PuffSmith\Setup\Mapper\SetupMapperTrait;
use PuffSmith\Setup\Repository\SetupRepositoryTrait;
use PuffSmith\Vape\Dto\VapeDto;

class VapeMapper extends AbstractMapper {
	use SetupRepositoryTrait;
	use SetupMapperTrait;
	use MixtureRepositoryTrait;
	use MixtureMapperTrait;
	use DriptipRepositoryTrait;
	use DriptipMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(VapeDto::class, [
			'id'        => $item->id,
			'setupId'   => ($setup = $this->setupRepository->find($item->setup_id))->id,
			'setup'     => $this->setupMapper->item($setup),
			'mixtureId' => ($mixture = $this->mixtureRepository->find($item->mixture_id))->id,
			'mixture'   => $this->mixtureMapper->item($mixture),
			'driptipId' => isset($item->driptip_id) ? ($driptip = $this->driptipRepository->find($item->driptip_id))->id : null,
			'driptip'   => isset($driptip) ? $this->driptipMapper->item($driptip) : null,
			'rating'    => $item->rating,
			'taste'     => $item->taste,
			'fruits'    => $item->fruits,
			'tobacco'   => $item->tobacco,
			'cakes'     => $item->cakes,
			'complex'   => $item->complex,
			'fresh'     => $item->fresh,
			'clouds'    => $item->clouds,
			'mtl'       => $item->mtl,
			'dl'        => $item->dl,
			'airflow'   => $item->airflow,
			'juice'     => $item->juice,
			'power'     => $item->power,
			'tc'        => $item->tc,
			'stamp'     => $this->isoDateNull($item->stamp),
		]);
	}
}
