<?php
declare(strict_types=1);

namespace PuffSmith\Api\Lab\Vendor\Endpoint;

use Edde\Query\Dto\Query;
use Edde\Query\Dto\QueryResult;
use Edde\Rest\Endpoint\AbstractQueryEndpoint;
use PuffSmith\Vendor\Dto\VendorDto;
use PuffSmith\Vendor\Dto\VendorFilterDto;
use PuffSmith\Vendor\Dto\VendorOrderByDto;
use PuffSmith\Vendor\Mapper\VendorMapperTrait;
use PuffSmith\Vendor\Repository\VendorRepositoryTrait;

class VendorsEndpoint extends AbstractQueryEndpoint {
	use VendorRepositoryTrait;
	use VendorMapperTrait;

	/**
	 * @param Query<VendorOrderByDto, VendorFilterDto> $query
	 *
	 * @return QueryResult<VendorDto>
	 */
	public function post(Query $query): QueryResult {
		return $this->vendorRepository->toResult($query, $this->vendorMapper);
	}
}
