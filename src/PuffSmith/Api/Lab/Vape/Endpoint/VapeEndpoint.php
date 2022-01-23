<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vape\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Vape\Dto\VapeDto;
use PuffSmith\Vape\Mapper\VapeMapperTrait;
use PuffSmith\Vape\Repository\VapeRepositoryTrait;

/**
 * @query vapeId
 */
class VapeEndpoint extends AbstractFetchEndpoint {
	use VapeRepositoryTrait;
	use VapeMapperTrait;

	public function get(): VapeDto {
		return $this->vapeMapper->item($this->vapeRepository->find($this->param('vapeId')));
	}
}
