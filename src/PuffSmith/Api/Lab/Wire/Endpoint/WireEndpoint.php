<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Wire\Endpoint;

use Edde\Rest\Endpoint\AbstractFetchEndpoint;
use PuffSmith\Wire\Dto\WireDto;
use PuffSmith\Wire\Mapper\WireMapperTrait;
use PuffSmith\Wire\Repository\WireRepositoryTrait;

/**
 * @query wireId
 */
class WireEndpoint extends AbstractFetchEndpoint {
	use WireRepositoryTrait;
	use WireMapperTrait;

	public function get(): WireDto {
		return $this->wireMapper->item($this->wireRepository->find($this->param('wireId')));
	}
}
