<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Atomizer\Dto\AtomizerFilterDto;
use PuffSmith\Atomizer\Dto\CreateDto;
use PuffSmith\Atomizer\Dto\PatchDto;
use function array_merge;

class AtomizerRepository extends AbstractRepository {
	use AtomizerTagRepositoryTrait;

	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['$_name_unique']);
		$this->orderByMap = [
			'vendor' => 'v.name',
		];
	}

	public function select($fields = null): Select {
		$select = parent::select($fields);
		$this->join($select, 'z_vendor', 'v', '$.vendor_id');
		$this->join($select, 'z_user_atomizer', 'ua', '$.id', 'atomizer_id');
		$this->join($select, 'z_atomizer_tag', 'at', '$.id', 'atomizer_id');
		return $select->distinct();
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter AtomizerFilterDto */
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
		isset($filter->userId) && $this->where($select, 'ua.user_id', $filter->userId);
		!empty($filter->drawIds) && $this->where($select, 'at.tag_id', 'in', $filter->drawIds);
		!empty($filter->typeIds) && $this->where($select, '$.type_id', 'in', $filter->typeIds);
		isset($filter->dual) && $this->where($select, '$.dual', $filter->dual);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		$atomizer = $this->insert([
			'name'      => $createDto->name,
			'vendor_id' => $createDto->vendorId,
			'type_id'   => $createDto->typeId,
			'coilMin'   => $createDto->coilMin,
			'coilMax'   => $createDto->coilMax,
			'dual'      => $createDto->dual,
		]);
		$tags = [];
		$tags = array_merge($tags, $createDto->drawIds);
		$this->atomizerTagRepository->syncWith('atomizer_id', 'tag_id', $atomizer->id, $tags);
		return $atomizer;
	}

	public function update(PatchDto $patchDto) {
		$atomizer = $this->change([
			'id'        => $patchDto->id,
			'name'      => $patchDto->name,
			'vendor_id' => $patchDto->vendorId,
			'type_id'   => $patchDto->typeId,
			'coilMin'   => $patchDto->coilMin,
			'coilMax'   => $patchDto->coilMax,
			'dual'      => $patchDto->dual,
		]);
		$tags = [];
		$tags = array_merge($tags, $patchDto->drawIds);
		$this->atomizerTagRepository->syncWith('atomizer_id', 'tag_id', $atomizer->id, $tags);
		return $atomizer;
	}

	public function findByCreate(CreateDto $createDto) {
		return $this->table()->select()->where([
			'name'      => $createDto->name,
			'vendor_id' => $createDto->vendorId,
		])->execute()->fetch();
	}
}
