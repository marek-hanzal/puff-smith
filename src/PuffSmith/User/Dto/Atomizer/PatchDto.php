<?php
declare(strict_types=1);

namespace PuffSmith\User\Dto\Atomizer;

use Edde\Dto\AbstractDto;

class PatchDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string|null
	 */
	public ?string $driptipId;
}
