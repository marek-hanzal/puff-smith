<?php
declare(strict_types=1);

namespace PuffSmith\Build\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Repository\AbstractRepository;

class BuildTagRepository extends AbstractRepository {
	public function select($fields = null): Select {
		$select = parent::select($fields);
		$this->join($select, 'z_build', 'b', 'build_id');
		$this->join($select, 'z_tag', 't', 'tag_id');
		return $select->distinct();
	}

	public function findByGroup(string $buildId, string $group) {
		return $this->select('t.*')->orderBy('t.sort', 'asc')->where('build_id', $buildId)->where('t.group', $group)->execute();
	}
}
