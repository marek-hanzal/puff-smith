<?php
declare(strict_types=1);

namespace PuffSmith\Vape\Dto;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $modId;
	/**
	 * @var string
	 */
	public string $buildId;
	/**
	 * @var string
	 */
	public string $mixtureId;
	/**
	 * @var string|null
	 */
	public ?string $driptipId;
}
