<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Repository\AbstractRepository;

class WireTagRepository extends AbstractRepository {
	public function select($fields = null): Select {
		$select = parent::select($fields);
		$this->join($select, 'z_wire', 'w', 'wire_id');
		$this->join($select, 'z_tag', 't', 'tag_id');
		return $select->distinct();
	}

	public function findByGroup(string $wireId, string $group) {
		return $this->select('t.*')->orderBy('t.sort', 'asc')->where('wire_id', $wireId)->where('t.group', $group)->execute();
	}
}
