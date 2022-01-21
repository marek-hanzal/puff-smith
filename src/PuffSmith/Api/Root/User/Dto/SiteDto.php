<?php
declare(strict_types=1);

namespace PuffSmith\Api\Root\User\Dto;

use Edde\Dto\AbstractDto;

class SiteDto extends AbstractDto {
	/** @var string */
	public string $id;
	/**
	 * @var string
	 */
	public string $name;
}
