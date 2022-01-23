<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $code;
	/**
	 * @var string[]
	 */
	public array $materials = [];
	/**
	 * @var string
	 */
	public string $vendorId;
}
