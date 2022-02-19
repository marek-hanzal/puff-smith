<?php
declare(strict_types=1);

namespace PuffSmith\Atomizer\Dto;

use Edde\Dto\AbstractDto;

class AtomizerImportDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string
	 * @description vendor name or an ID
	 */
	public string $vendor;
	/**
	 * @var string|null|void
	 */
	public ?string $coilMin;
	/**
	 * @var string|null|void
	 */
	public ?string $coilMax;
	/**
	 * @var string
	 */
	public string $dual = 'false';
	/**
	 * @var string|null
	 */
	public ?string $type;
	/**
	 * @var string|null
	 */
	public ?string $draw;
}
