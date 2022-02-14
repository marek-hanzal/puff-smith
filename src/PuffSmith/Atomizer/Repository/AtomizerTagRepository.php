<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Repository;

use ClanCats\Hydrahon\Query\Sql\Select;
use Edde\Repository\AbstractRepository;

class AtomizerTagRepository extends AbstractRepository {
	public function select($fields = null): Select {
		$select = parent::select($fields);
		$this->join($select, 'z_atomizer', 'a', 'atomizer_id');
		$this->join($select, 'z_tag', 't', 'tag_id');
		return $select->distinct();
	}

	public function findByGroup(string $atomizerId, string $group) {
		return $this->select('t.*')->orderBy('t.sort', 'asc')->where('atomizer_id', $atomizerId)->where('t.group', $group)->execute();
	}
}
