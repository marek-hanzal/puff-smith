<?php
declare(strict_types=1);

namespace PuffSmith\Vendor\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\Exception\DuplicateEntryException;
use Edde\Repository\Exception\RequiredResultException;
use Edde\Repository\IRepository;
use PuffSmith\Vendor\Dto\CreateDto;
use PuffSmith\Vendor\Dto\EnsureDto;
use PuffSmith\Vendor\Dto\PatchDto;
use PuffSmith\Vendor\Dto\VendorFilterDto;

class VendorRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], [
			'z_vendor_name_unique',
		]);
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter VendorFilterDto */
		$filter = $query->filter;
		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'$.name',
		], $filter->fulltext);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function findByName(string $name) {
		return $this->select()->where('name', $name)->execute()->fetch();
	}

	public function findByVarious(string $search) {
		$vendor = $this->fulltext($this->select(), [
			'id',
			'name',
		], $search)->execute()->fetch();
		if (!$vendor) {
			throw new RequiredResultException(sprintf('Cannot find a vendor by [%s].', $search));
		}
		return $vendor;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name' => $createDto->name,
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->change([
			'id'   => $patchDto->id,
			'name' => $patchDto->name,
		]);
	}

	public function ensure(EnsureDto $ensureDto) {
		try {
			return $this->insert([
				'name' => trim($ensureDto->name),
			]);
		} catch (DuplicateEntryException $_) {
			return $this->findByName($ensureDto->name);
		}
	}

	public function findByCreate(CreateDto $createDto) {
		return $this
			->select()
			->where('name', $createDto->name)
			->execute()
			->fetch();
	}
}
