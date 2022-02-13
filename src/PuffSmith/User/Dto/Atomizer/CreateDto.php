<?php
declare(strict_types=1);

namespace PuffSmith\User\Dto\Atomizer;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $atomizerId;
	/**
	 * @var string|null
	 */
	public ?string $driptipId;
}
