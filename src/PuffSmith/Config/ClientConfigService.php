<?php
declare(strict_types=1);

namespace PuffSmith\Config;

use Edde\Dto\DtoServiceTrait;
use Edde\Link\LinkGeneratorTrait;
use PuffSmith\Config\Dto\ClientConfigDto;

class ClientConfigService {
	use LinkGeneratorTrait;
	use DtoServiceTrait;

	public function config(): ClientConfigDto {
		return $this->dtoService->fromArray(ClientConfigDto::class, [
			'discovery' => $this->linkGenerator->link('/api/shared/discovery'),
		]);
	}
}
