<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use Edde\User\CurrentUserServiceTrait;
use PuffSmith\Driptip\Dto\Create\CreateDto;
use PuffSmith\Driptip\Dto\DriptipFilterDto;

class DriptipRepository extends AbstractRepository {
	use CurrentUserServiceTrait;
	use DriptipMaterialRepositoryTrait;

	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['z_driptip_code_unique']);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter DriptipFilterDto */
		$filter = $query->filter;
		isset($filter->fulltext) && $this->fulltext($select, [
			'id',
			'name',
		], $filter->fulltext);
		isset($filter->name) && $this->fulltext($select, ['name'], $filter->name);
		isset($filter->userId) && $select->where('user_id', $filter->userId);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		$driptip = $this->insert([
			'name'      => $createDto->name,
			'vendor_id' => $createDto->vendorId,
			'user_id'   => $this->currentUserService->requiredId(),
		]);
		$this->driptipMaterialRepository->sync($driptip->id, $createDto->materials);
		return $driptip;
	}
}
