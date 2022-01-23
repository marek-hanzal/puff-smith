<?php
declare(strict_types=1);

use Edde\Phinx\CommonMigration;

final class VapeDefault extends CommonMigration {
	public function change(): void {
		$this
			->createUuidTable('z_vape', ['comment' => 'Vape is record of the vaping experience based on various variables and the build'])
			->addUuidForeignColumn('setup', 'z_setup', ['comment' => 'Which setup has been used for this vape.'])
			->addUuidForeignColumn('mixture', 'z_mixture', ['comment' => 'What is an user vaping (liquid).'])
			->addUuidForeignColumn('driptip', 'z_driptip', [
				'comment' => 'Which driptip has been used.',
				'null'    => true,
			])
			->addColumn('rating', 'integer', ['comment' => 'An overall rating of this vape; one of the most important parameters here.'])
			->addColumn('taste', 'integer', ['comment' => 'Rating of taste.'])
			->addColumn('fruits', 'integer', [
				'comment' => 'Rating of fruity liquids.',
				'null'    => true,
			])
			->addColumn('tobacco', 'integer', [
				'comment' => 'Rating of tobacco based liquids.',
				'null'    => true,
			])
			->addColumn('cakes', 'integer', [
				'comment' => 'Rating of cake like liquids.',
				'null'    => true,
			])
			->addColumn('complex', 'integer', [
				'comment' => 'Rating of complex liquids (multiple ingredients without dominant one).',
				'null'    => true,
			])
			->addColumn('fresh', 'integer', [
				'comment' => 'If mint like liquid is used, how "fresh" it tastes; higher number is not convenient anymore.',
				'null'    => true,
			])
			->addColumn('clouds', 'integer', ['comment' => 'How cloudy this vape is.'])
			->addColumn('mtl', 'integer', ['comment' => 'MTL rating of this build.'])
			->addColumn('dl', 'integer', ['comment' => 'MTL rating of this build.'])
			->addColumn('dryhit', 'integer', ['comment' => 'A probability of dry hit of this vape setting.'])
			->addColumn('leaks', 'integer', ['comment' => 'An amount of leaks of this build; zero means no leaks.'])
			->addColumn('airflow', 'integer', ['comment' => 'How the airflow has been set; generally 0 is ultra-tight (basically closed) MTL, higher numbers are open DL.'])
			->addColumn('juice', 'integer', [
				'comment' => 'How juice flow has been set; 0 closed, higher numbers fully opened. This could help setup less or non-leaking atomizer.',
				'null'    => true,
			])
			->addColumn('power', 'integer', [
				'comment' => 'Power in watts used for this setup.',
				'null'    => true,
			])
			->addColumn('tc', 'integer', [
				'comment' => 'Temperature in Celsius used for this setup.',
				'null'    => true,
			])
			->addColumn('stamp', 'datetime', ['comment' => 'Timestamp of this vaping experience'])
			->addUuidForeignColumn('user', 'z_user', ['comment' => 'Owner of this vaping experience'])
			->save();
	}
}
