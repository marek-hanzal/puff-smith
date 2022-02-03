<?php
declare(strict_types=1);

namespace PuffSmith\Vape;

trait PlotServiceTrait {
	protected PlotService $plotService;

	/**
	 * @Inject
	 *
	 * @param PlotService $plotService
	 */
	public function setPlotService(PlotService $plotService): void {
		$this->plotService = $plotService;
	}
}
