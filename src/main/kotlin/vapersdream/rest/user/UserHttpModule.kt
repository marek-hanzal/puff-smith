package vapersdream.rest.user

import io.ktor.routing.*
import leight.container.IContainer
import leight.http.AbstractHttpModule
import vapersdream.rest.user.atomizer.AtomizerHttpModule
import vapersdream.rest.user.base.BaseHttpModule
import vapersdream.rest.user.battery.BatteryHttpModule
import vapersdream.rest.user.build.BuildHttpModule
import vapersdream.rest.user.cotton.CottonHttpModule
import vapersdream.rest.user.driptip.DriptipHttpModule
import vapersdream.rest.user.liquid.LiquidHttpModule
import vapersdream.rest.user.mod.ModHttpModule
import vapersdream.rest.user.steeping.SteepingHttpModule
import vapersdream.rest.user.wire.WireHttpModule

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
		)
	}
}
