<?php
declare(strict_types=1);

namespace Edde\Bridge\User;

use Edde\User\AbstractUser;
use Edde\User\Dto\Settings\UserSettingsDto;

class UserDto extends AbstractUser {
	/**
	 * @var string|void
	 */
	public $email;
	/**
	 * @var string
	 */
	public $site;
	/**
	 * @var UserSettingsDto|void
	 */
	public $settings;
}
