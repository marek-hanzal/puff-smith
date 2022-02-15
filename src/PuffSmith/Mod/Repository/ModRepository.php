<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Query\Dto\Query;
use Edde\Repository\AbstractRepository;
use Edde\Repository\IRepository;
use PuffSmith\Mod\Dto\CreateDto;
use PuffSmith\Mod\Dto\ModFilterDto;
use PuffSmith\Mod\Dto\PatchDto;
use function array_merge;

class ModRepository extends AbstractRepository {
	use ModTagRepositoryTrait;

	public function __construct() {
		parent::__construct(['name' => IRepository::ORDER_ASC], ['$_name_unique']);
		$this->orderByMap = [
			'vendor' => 'v.name',
		];
	}

	public function select($fields = null): Select {
		$select = parent::select($fields);
		$this->join($select, 'z_vendor', 'v', '$.vendor_id');
		$this->join($select, 'z_mod_tag', 'mt', '$.id', 'mod_id');
		return $select->distinct();
	}

	public function toQuery(Query $query): Select {
		$select = $this->select();

		/** @var $filter ModFilterDto */
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
		!empty($filter->cellTypeIds) && $this->where($select, 'mt.tag_id', 'in', $filter->cellTypeIds);

		$this->toOrderBy($query->orderBy, $select);

		return $select;
	}

	public function create(CreateDto $createDto) {
		$mod = $this->insert([
			'name'      => $createDto->name,
			'power'     => $createDto->power,
			'voltage'   => $createDto->voltage,
			'vendor_id' => $createDto->vendorId,
		]);
		$tags = [];
		$tags = array_merge($tags, $createDto->cellTypeIds);
		$this->modTagRepository->syncWith('mod_id', 'tag_id', $mod->id, $tags);
		return $mod;
	}

	public function update(PatchDto $patchDto) {
		$mod = $this->change([
			'id'        => $patchDto->id,
			'name'      => $patchDto->name,
			'power'     => $patchDto->power,
			'voltage'   => $patchDto->voltage,
			'vendor_id' => $patchDto->vendorId,
		]);
		$tags = [];
		$tags = array_merge($tags, $patchDto->cellTypeIds);
		$this->modTagRepository->syncWith('mod_id', 'tag_id', $mod->id, $tags);
		return $mod;
	}
}
