<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Mapper;

use Edde\Mapper\AbstractMapper;
use PuffSmith\Build\Mapper\BuildMapperTrait;
use PuffSmith\Build\Repository\BuildRepositoryTrait;
use PuffSmith\Driptip\Mapper\DriptipMapperTrait;
use PuffSmith\Driptip\Repository\DriptipRepositoryTrait;
use PuffSmith\Mixture\Mapper\MixtureMapperTrait;
use PuffSmith\Mixture\Repository\MixtureRepositoryTrait;
use PuffSmith\Vape\Dto\VapeDto;

class VapeMapper extends AbstractMapper {
	use BuildRepositoryTrait;
	use BuildMapperTrait;
	use MixtureRepositoryTrait;
	use MixtureMapperTrait;
	use DriptipRepositoryTrait;
	use DriptipMapperTrait;

	public function item($item, array $params = []) {
		return $this->dtoService->fromArray(VapeDto::class, [
			'id'        => $item->id,
			'buildId'   => ($build = $this->buildRepository->find($item->build_id))->id,
			'build'     => $this->buildMapper->item($build),
			'mixtureId' => ($mixture = $this->mixtureRepository->find($item->mixture_id))->id,
			'mixture'   => $this->mixtureMapper->item($mixture),
			'driptipId' => isset($item->driptip_id) ? ($driptip = $this->driptipRepository->find($item->driptip_id))->id : null,
			'driptip'   => isset($driptip) ? $this->driptipMapper->item($driptip) : null,
			'rating'    => $item->rating,
			'taste'     => $item->taste,
			'throathit' => $item->throathit,
			'fruits'    => $item->fruits,
			'tobacco'   => $item->tobacco,
			'cakes'     => $item->cakes,
			'complex'   => $item->complex,
			'fresh'     => $item->fresh,
			'clouds'    => $item->clouds,
			'mtl'       => $item->mtl,
			'dl'        => $item->dl,
			'dryhit'    => $item->dryhit,
			'leaks'     => $item->leaks,
			'airflow'   => $item->airflow,
			'juice'     => $item->juice,
			'power'     => $item->power,
			'tc'        => $item->tc,
			'stamp'     => $this->isoDateNull($item->stamp),
		]);
	}
}
