<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Dto;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string
	 */
	public string $vendorId;
	/**
	 * @var string[]
	 */
	public array $drawIds = [];
	/**
	 * @var string|null|void
	 */
	public ?string $typeId;
	/**
	 * @var float|null|void
	 */
	public ?float $coilMin;
	/**
	 * @var float|null|void
	 */
	public ?float $coilMax;
	/**
	 * @var bool
	 */
	public bool $dual = false;
}
