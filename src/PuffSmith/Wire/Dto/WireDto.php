<?php
declare(strict_types=1);

namespace PuffSmith\Wire\Dto;

use Edde\Dto\AbstractDto;
use Edde\Tag\Dto\TagDto;
use PuffSmith\Vendor\Dto\VendorDto;

class WireDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var string|null
	 */
	public ?string $description;
	/**
	 * @var int|null
	 */
	public ?int $ga;
	/**
	 * @var string
	 */
	public string $vendorId;
	/**
	 * @var VendorDto
	 */
	public VendorDto $vendor;
	/**
	 * @var TagDto[]
	 */
	public array $draws = [];
	/**
	 * @var string[]
	 */
	public array $drawIds = [];
	/**
	 * @var bool
	 */
	public bool $tc;
}
