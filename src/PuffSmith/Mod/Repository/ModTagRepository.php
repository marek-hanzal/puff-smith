<?php
declare(strict_types=1);

namespace PuffSmith\Mod\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Repository\AbstractRepository;

class ModTagRepository extends AbstractRepository {
	public function select($fields = null): Select {
		$select = parent::select($fields);
		$this->join($select, 'z_mod', 'm', 'mod_id');
		$this->join($select, 'z_tag', 't', 'tag_id');
		return $select->distinct();
	}

	public function findByGroup(string $modId, string $group) {
		return $this->select('t.*')->orderBy('t.sort', 'asc')->where('mod_id', $modId)->where('t.group', $group)->execute();
	}
}
