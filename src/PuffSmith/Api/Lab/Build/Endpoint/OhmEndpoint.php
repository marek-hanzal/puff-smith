<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Build\Endpoint;

use Edde\Rest\Endpoint\AbstractMutationEndpoint;
use PuffSmith\Api\Lab\Build\Dto\OhmDto;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;

class OhmEndpoint extends AbstractMutationEndpoint {
	use CoilRepositoryTrait;

	/**
	 * @param OhmDto $ohmDto
	 *
	 * @return float|null
	 */
	public function post(OhmDto $ohmDto): ?float {
		$coil = $this->coilRepository
			->table()
			->select()
			->where('wire_id', $ohmDto->wireId)
			->where('wraps', $ohmDto->wraps)
			->where('size', $ohmDto->size)
			->execute()
			->fetch();
		return $coil ? $coil->ohm : null;
	}
}
