package vapersdream.api.user

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import vapersdream.api.user.atomizer.AtomizerHttpModule
import vapersdream.api.user.base.BaseHttpModule
import vapersdream.api.user.battery.BatteryHttpModule
import vapersdream.api.user.build.BuildHttpModule
import vapersdream.api.user.cotton.CottonHttpModule
import vapersdream.api.user.driptip.DriptipHttpModule
import vapersdream.api.user.liquid.LiquidHttpModule
import vapersdream.api.user.mod.ModHttpModule
import vapersdream.api.user.ohm.OhmHttpModule
import vapersdream.api.user.steeping.SteepingHttpModule
import vapersdream.api.user.wire.WireHttpModule

/**
 * The main user-space application part (the business of this application).
 *
 * All registered users can use this module; if there is an exception, a user cannot use
 * the application at all.
 */
class UserHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
			AtomizerHttpModule::class,
			BatteryHttpModule::class,
			ModHttpModule::class,
			BaseHttpModule::class,
			LiquidHttpModule::class,
			BuildHttpModule::class,
			CottonHttpModule::class,
			DriptipHttpModule::class,
			SteepingHttpModule::class,
			WireHttpModule::class,
			OhmHttpModule::class,
		)
	}
}
