<?php
declare(strict_types=1);

namespace PuffSmith\Driptip\Dto;

use Edde\Dto\AbstractDto;
use Edde\Tag\Dto\TagDto;

class DriptipDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 */
	public string $code;
	/**
	 * @var TagDto[]
	 * @description materials of this driptip
	 */
	public array $materials = [];
}
