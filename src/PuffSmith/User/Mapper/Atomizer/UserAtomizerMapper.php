<?php
declare(strict_types=1);

namespace PuffSmith\User\Mapper\Atomizer;

use ClanCats\Hydrahon\Query\Sql\Exception;
use Edde\Mapper\AbstractMapper;
use Edde\Mapper\Exception\ItemException;
use Edde\Mapper\Exception\SkipException;
use Edde\Repository\Exception\RepositoryException;
use PuffSmith\Atomizer\Mapper\AtomizerMapperTrait;
use PuffSmith\Atomizer\Repository\AtomizerRepositoryTrait;
use PuffSmith\Driptip\Mapper\DriptipMapperTrait;
use PuffSmith\Driptip\Repository\DriptipRepositoryTrait;
use PuffSmith\User\Dto\Atomizer\UserAtomizerDto;

class UserAtomizerMapper extends AbstractMapper {
	use AtomizerRepositoryTrait;
	use AtomizerMapperTrait;
	use DriptipMapperTrait;
	use DriptipRepositoryTrait;

	/**
	 * @param $item
	 *
	 * @return UserAtomizerDto
	 *
	 * @throws Exception
	 * @throws ItemException
	 * @throws SkipException
	 * @throws RepositoryException
	 */
	public function item($item) {
		return $this->dtoService->fromArray(UserAtomizerDto::class, [
			'id'         => $item->id,
			'atomizerId' => $item->atomizer_id,
			'atomizer'   => $this->atomizerMapper->item($this->atomizerRepository->find($item->atomizer_id)),
			'driptipId'  => $item->driptip_id,
			'driptip'    => isset($item->driptip_id) ? $this->driptipMapper->item($this->driptipRepository->find($item->driptip_id)) : null,
			'stamp'      => $this->isoDateNull($item->stamp),
		]);
	}
}
