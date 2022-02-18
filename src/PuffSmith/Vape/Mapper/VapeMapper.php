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
use PuffSmith\Mod\Mapper\ModMapperTrait;
use PuffSmith\Mod\Repository\ModRepositoryTrait;
use PuffSmith\Vape\Dto\VapeDto;

class VapeMapper extends AbstractMapper {
	use BuildRepositoryTrait;
	use BuildMapperTrait;
	use MixtureRepositoryTrait;
	use MixtureMapperTrait;
	use DriptipRepositoryTrait;
	use DriptipMapperTrait;
	use ModRepositoryTrait;
	use ModMapperTrait;

	public function item($item) {
		return $this->dtoService->fromArray(VapeDto::class, [
			'id'        => $item->id,
			'modId'     => ($mod = $this->modRepository->find($item->mod_id))->id,
			'mod'       => $this->modMapper->item($mod),
			'buildId'   => ($build = $this->buildRepository->find($item->build_id))->id,
			'build'     => $this->buildMapper->item($build),
			'mixtureId' => ($mixture = $this->mixtureRepository->find($item->mixture_id))->id,
			'mixture'   => $this->mixtureMapper->item($mixture),
			'driptipId' => isset($item->driptip_id) ? ($driptip = $this->driptipRepository->find($item->driptip_id))->id : null,
			'driptip'   => isset($driptip) ? $this->driptipMapper->item($driptip) : null,
			'rating'    => $item->rating,
			'throathit' => $item->throathit,
			'fruits'    => $item->fruits,
			'tobacco'   => $item->tobacco,
			'cakes'     => $item->cakes,
			'complex'   => $item->complex,
			'fresh'     => $item->fresh,
			'power'     => $item->power,
			'tc'        => $item->tc,
			'stamp'     => $this->isoDateNull($item->stamp),
		]);
	}
}
