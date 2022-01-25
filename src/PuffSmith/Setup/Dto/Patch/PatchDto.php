<?php
declare(strict_types=1);

namespace PuffSmith\Setup\Dto\Patch;

use Edde\Dto\AbstractDto;

class PatchDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string|null|void
	 */
	public ?string $name;
	/**
	 * @var string|null|void
	 */
	public ?string $description;
	/**
	 * @var string|null|void
	 */
	public ?string $buildId;
	/**
	 * @var string|null|void
	 */
	public ?string $modId;
}
