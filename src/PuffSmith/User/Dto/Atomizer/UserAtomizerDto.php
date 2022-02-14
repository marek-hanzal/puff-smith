<?php
declare(strict_types=1);

namespace PuffSmith\User\Dto\Atomizer;

use Edde\Dto\AbstractDto;
use PuffSmith\Atomizer\Dto\AtomizerDto;
use PuffSmith\Driptip\Dto\DriptipDto;

class UserAtomizerDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $id;
	/**
	 * @var string
	 */
	public string $atomizerId;
	/**
	 * @var AtomizerDto
	 */
	public AtomizerDto $atomizer;
	/**
	 * @var string|null
	 */
	public ?string $driptipId;
	/**
	 * @var DriptipDto|null
	 */
	public ?DriptipDto $driptip;
	/**
	 * @var string
	 */
	public string $stamp;
}
