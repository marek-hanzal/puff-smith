<?php
declare(strict_types=1);

namespace PuffSmith\Build\Mapper;

use ClanCats\Hydrahon\Query\Sql\Exception;
use Edde\Mapper\AbstractMapper;
use Edde\Mapper\Exception\ItemException;
use Edde\Mapper\Exception\SkipException;
use Edde\Repository\Exception\RepositoryException;
use Edde\Tag\Mapper\TagMapperTrait;
use PuffSmith\Atomizer\Mapper\AtomizerMapperTrait;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;
use PuffSmith\Build\Dto\BuildDto;
use PuffSmith\Build\Repository\BuildTagRepositoryTrait;
use PuffSmith\Coil\Mapper\CoilMapperTrait;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;
use PuffSmith\Cotton\Mapper\CottonMapperTrait;
use PuffSmith\Cotton\Repository\CottonRepositoryTrait;
use PuffSmith\Driptip\Mapper\DriptipMapperTrait;
use PuffSmith\Driptip\Repository\DriptipRepositoryTrait;
use PuffSmith\Mod\Mapper\ModMapperTrait;
use PuffSmith\Mod\Repository\ModRepositoryTrait;
use function array_map;

class BuildMapper extends AbstractMapper {
	use AtomizerRepositoryTrait;
	use AtomizerMapperTrait;
	use CoilRepositoryTrait;
	use CoilMapperTrait;
	use CottonRepositoryTrait;
	use CottonMapperTrait;
	use DriptipRepositoryTrait;
	use DriptipMapperTrait;
	use BuildTagRepositoryTrait;
	use TagMapperTrait;
	use ModRepositoryTrait;
	use ModMapperTrait;

	/**
	 * @param $item
	 *
	 * @return BuildDto
	 *
	 * @throws Exception
	 * @throws ItemException
	 * @throws SkipException
	 * @throws RepositoryException
	 */
	public function item($item) {
		return $this->dtoService->fromArray(BuildDto::class, [
			'id'         => $item->id,
			'active'     => (bool)$item->active,
			'disabledOn' => $this->isoDateNull($item->disabledOn),
			'created'    => $this->isoDateNull($item->created),
			'dual'       => (bool)$item->dual,
			'dualMode'   => $item->dualMode,
			'driptipId'  => $item->driptip_id,
			'driptip'    => $item->driptip_id ? $this->driptipMapper->item($this->driptipRepository->find($item->driptip_id)) : null,
			'atomizerId' => ($atomizer = $this->atomizerRepository->find($item->atomizer_id))->id,
			'atomizer'   => $this->atomizerMapper->item($atomizer),
			'modId'      => $item->mod_id,
			'mod'        => isset($item->mod_id) ? $this->modMapper->item($this->modRepository->find($item->mod_id)) : null,
			'coilId'     => ($coil = $this->coilRepository->find($item->coil_id))->id,
			'coil'       => $this->coilMapper->item($coil),
			'cottonId'   => ($cotton = $this->cottonRepository->find($item->cotton_id))->id,
			'cotton'     => $this->cottonMapper->item($cotton),
			'ohm'        => $item->ohm,
			'draws'      => $draws = $this->tagMapper->map($this->buildTagRepository->findByGroup($item->id, 'draw')),
			'drawIds'    => array_map(function ($draw) {
				return $draw->id;
			}, $draws),
		]);
	}
}
