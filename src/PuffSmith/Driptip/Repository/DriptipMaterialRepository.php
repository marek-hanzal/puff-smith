<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Repository;

use Edde\Repository\AbstractRepository;

class DriptipMaterialRepository extends AbstractRepository {
	public function sync(string $driptipId, array $materials) {
		$this->syncWith('driptip_id', 'material_id', $driptipId, $materials);
	}

	public function findMaterialByDriptip(string $driptipId) {
		return $this->storage
			->table('z_tag')
			->select()
			->leftJoin('z_driptip_material as zdm', 'z_tag.id', '=', 'zdm.material_id')
			->where('zdm.driptip_id', $driptipId)
			->execute();
	}
}
