<?php
declare(strict_types=1);

namespace PuffSmith\Updater;

use Edde\Job\AbstractJobService;
use Edde\Job\IJob;
use Edde\Query\Dto\Query;
use PuffSmith\Coil\CoilServiceTrait;
use PuffSmith\Coil\Repository\CoilRepositoryTrait;

class UpdaterJobService extends AbstractJobService {
	use CoilServiceTrait;
	use CoilRepositoryTrait;

	protected function handle(IJob $job) {
		$coils = $this->coilRepository->total(new Query());

		$progress = $job->getProgress();
		$progress->onStart($coils);
		foreach ($this->coilRepository->all() as $coil) {
			$progress->onProgress();
			$this->coilRepository->change([
				'id'  => $coil->id,
				'ohm' => $this->coilService->toCoilOhm($coil->id),
			]);
		}

		return [
			'coils' => $coils,
		];
	}
}
