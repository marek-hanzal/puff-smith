<?php
declare(strict_types=1);

namespace PuffSmith\Config;

trait ClientConfigServiceTrait {
	/** @var ClientConfigService */
	protected ClientConfigService $clientConfigService;

	/**
	 * @Inject
	 *
	 * @param ClientConfigService $clientConfigService
	 */
	public function setClientConfigService(ClientConfigService $clientConfigService): void {
		$this->clientConfigService = $clientConfigService;
	}
}
