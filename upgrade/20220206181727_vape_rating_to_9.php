<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;
use PuffSmith\Vape\Repository\VapeRepositoryTrait;

final class VapeRatingTo9 extends CommonMigration {
	use VapeRepositoryTrait;

	public function change(): void {
		foreach ($this->vapeRepository->all() as $vape) {
			$this->vapeRepository->change([
				'id'      => $vape->id,
				'rating'  => $vape->rating ? min($vape->rating, 9) : $vape->rating,
				'taste'   => $vape->taste ? min($vape->taste, 9) : $vape->taste,
				'fruits'  => $vape->fruits ? min($vape->fruits, 9) : $vape->fruits,
				'tobacco' => $vape->tobacco ? min($vape->tobacco, 9) : $vape->tobacco,
				'cakes'   => $vape->cakes ? min($vape->cakes, 9) : $vape->cakes,
				'complex' => $vape->complex ? min($vape->complex, 9) : $vape->complex,
				'fresh'   => $vape->fresh ? min($vape->fresh, 9) : $vape->fresh,
				'clouds'  => $vape->clouds ? min($vape->clouds, 9) : $vape->clouds,
				'mtl'     => $vape->mtl ? min($vape->mtl, 9) : $vape->mtl,
				'dl'      => $vape->dl ? min($vape->dl, 9) : $vape->dl,
				'dryhit'  => $vape->dryhit ? min($vape->dryhit, 9) : $vape->dryhit,
				'leaks'   => $vape->leaks ? min($vape->leaks, 9) : $vape->leaks,
				'airflow' => $vape->airflow ? min($vape->airflow, 9) : $vape->airflow,
				'juice'   => $vape->juice ? min($vape->juice, 9) : $vape->juice,
			]);
		}
	}
}
