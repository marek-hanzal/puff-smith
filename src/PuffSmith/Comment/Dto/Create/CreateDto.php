<?php
declare(strict_types=1);

namespace PuffSmith\Comment\Dto\Create;

use Edde\Dto\AbstractDto;

class CreateDto extends AbstractDto {
	/**
	 * @var string
	 */
	public string $comment;
}
