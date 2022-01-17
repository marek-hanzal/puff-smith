<?php
declare(strict_types=1);

namespace Edde\Bridge\User;

use Edde\User\AbstractCurrentUser;
use Marsh\Role\Dto\RoleDto;

class CurrentUser extends AbstractCurrentUser {
	/** @var string|null */
	public $email;
}
