<?php
declare(strict_types=1);

namespace PuffSmith\Session;

use Edde\Session\AbstractSessionMapper;
use Edde\Session\Dto\SessionDto;

class SessionMapper extends AbstractSessionMapper {
	public function item($item) {
		return $this->dtoService->fromArray(SessionDto::class, [
			'user' => $item,
		]);
	}
}
