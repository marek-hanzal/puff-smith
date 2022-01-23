<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Mixture\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Mixture\Dto\MixtureDto;
use PuffSmith\Mixture\Mapper\MixtureMapperTrait;
use PuffSmith\Mixture\Repository\MixtureRepositoryTrait;

/**
 * @query       mixtureId
 */
class MixtureEndpoint extends AbstractFetchEndpoint {
	use MixtureRepositoryTrait;
	use MixtureMapperTrait;

	public function get(): MixtureDto {
		return $this->mixtureMapper->item($this->mixtureRepository->find($this->param('mixtureId')));
	}
}
