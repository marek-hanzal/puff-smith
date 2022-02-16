<?php
declare(strict_types=1);

namespace PuffSmith\Updater;

trait UpdaterJobServiceTrait {
	protected UpdaterJobService $updaterJobService;

	/**
	 * @Inject
	 *
	 * @param UpdaterJobService $updaterJobService
	 */
	public function setUpdaterJobService(UpdaterJobService $updaterJobService): void {
		$this->updaterJobService = $updaterJobService;
	}
}
