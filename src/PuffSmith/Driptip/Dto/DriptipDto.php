<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Dto;

use Edde\Dto\AbstractDto;
use Edde\Tag\Dto\TagDto;
use PuffSmith\Vendor\Dto\VendorDto;

class DriptipDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 */
	public string $name;
	/**
	 * @var TagDto[]
	 * @description materials of this driptip
	 */
	public array $materials = [];
	/**
	 * @var string
	 */
	public string $vendorId;
	/**
	 * @var VendorDto
	 */
	public VendorDto $vendor;
}
