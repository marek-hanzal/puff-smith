<?php
declare(strict_types=1);

namespace PuffSmith\Vendor\Repository;

use Edde\Repository\AbstractRepository;
use Edde\Repository\Exception\DuplicateEntryException;
use Edde\Repository\IRepository;
use PuffSmith\Vendor\Dto\Ensure\EnsureDto;

class VendorRepository extends AbstractRepository {
	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], [
			'z_vendor_name_unique',
		]);
	}

	public function findByName(string $name) {
		return $this->select()->where('name', $name)->execute()->fetch();
	}

	public function findByVarious(string $search) {
		return $this->fulltext($this->select(), [
			'id',
			'name',
		], $search)->execute()->fetch();
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
}
