<?php
declare(strict_types=1);

namespace PuffSmith\Cell\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\Exception\RequiredResultException;
use Edde\Repository\IRepository;
use PuffSmith\Cell\Dto\CellFilterDto;
use PuffSmith\Cell\Dto\CreateDto;
use PuffSmith\Cell\Dto\PatchDto;
use PuffSmith\Ohm\OhmServiceTrait;
use function sprintf;

class CellRepository extends AbstractRepository {
	use OhmServiceTrait;

	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['$_name_unique']);
		$this->orderByMap = [
			'vendor' => 'v.name',
			'type'   => 'ty.code',
		];
	}

	public function select($fields = null): Select {
		$select = parent::select($fields);
		$this->join($select, 'z_vendor', 'v', '$.vendor_id');
		$this->join($select, 'z_tag', 'ty', '$.type_id');
		return $select;
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter CellFilterDto */
		$filter = $query->filter;

		isset($filter->fulltext) && $this->fulltext($select, [
			'$.id',
			'$.name',
			'v.name',
		], $filter->fulltext);
		isset($filter->name) && $this->fulltext($select, [
			'$.name',
		], $filter->name);
		!empty($filter->vendorIds) && $this->where($select, '$.vendor_id', 'in', $filter->vendorIds);
		!empty($filter->typeIds) && $this->where($select, '$.type_id', 'in', $filter->typeIds);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		return $this->insert([
			'name'      => $createDto->name,
			'type_id'   => $createDto->typeId,
			'drain'     => $createDto->drain,
			'voltage'   => $createDto->voltage,
			'ohm'       => max(0.2, $this->ohmService->toOhm($createDto->voltage, $createDto->drain * 0.75)),
			'vendor_id' => $createDto->vendorId,
		]);
	}

	public function update(PatchDto $patchDto) {
		return $this->change([
			'id'        => $patchDto->id,
			'name'      => $patchDto->name,
			'type_id'   => $patchDto->typeId,
			'drain'     => $patchDto->drain,
			'voltage'   => $patchDto->voltage,
			'ohm'       => max(0.2, $this->ohmService->toOhm($patchDto->voltage, $patchDto->drain * 0.75)),
			'vendor_id' => $patchDto->vendorId,
		]);
	}

	public function findByCreate(CreateDto $createDto) {
		$select = $this->select();
		$this->where($select, '$.name', $createDto->name);
		$this->where($select, '$.vendor_id', $createDto->vendorId);
		if (!($fetch = $select->execute()->fetch())) {
			throw new RequiredResultException(sprintf('Cannot find cell [%s] by create dto request.', $createDto->name));
		}
		return $fetch;
	}
}
