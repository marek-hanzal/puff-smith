import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	kotlin("jvm") version "1.5.21"
	kotlin("plugin.serialization") version "1.5.21"
}

group = "me.marek.hanzal"
version = "1.0-SNAPSHOT"

repositories {
	mavenCentral()
}

dependencies {
	with("0.33.1") {
		implementation("org.jetbrains.exposed:exposed-core:$this")
		implementation("org.jetbrains.exposed:exposed-jodatime:$this")
		implementation("org.jetbrains.exposed:exposed-dao:$this")
		implementation("org.jetbrains.exposed:exposed-jdbc:$this")
	}
	with("1.3.0-alpha7") {
		implementation("ch.qos.logback:logback-classic:$this")
	}
	with("5.0.0") {
		implementation("com.zaxxer:HikariCP:$this")
	}
	with("0.4.2") {
		implementation("io.github.config4k:config4k:$this")
	}
	with("42.2.23") {
		implementation("org.postgresql:postgresql:$this")
	}
	with("2.0.10") {
		implementation("io.github.microutils:kotlin-logging:$this")
	}
	with("5.5") {
		implementation("com.beust:klaxon:$this")
	}
	with("1.14.1") {
		implementation("org.jsoup:jsoup:$this")
	}
	with("1.6.2") {
		implementation("io.ktor:ktor-server-core:$this")
		implementation("io.ktor:ktor-server-netty:$this")
		implementation("io.ktor:ktor-gson:$this")
		implementation("io.ktor:ktor-auth:$this")
	}
	with("1.4.200") {
		implementation("com.h2database:h2:$this")
	}
	with("0.9.0") {
		implementation("at.favre.lib:bcrypt:$this")
	}
	with("1.2.2") {
		implementation("org.jetbrains.kotlinx:kotlinx-serialization-core:$this")
	}
	testImplementation(kotlin("test"))
}

tasks.test {
	useJUnitPlatform()
}

tasks.withType<KotlinCompile> {
	kotlinOptions.jvmTarget = "16"
}
