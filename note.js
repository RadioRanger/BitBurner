/** @param {NS} ns */
export async function main(ns) {

//Single Run.

//Var's
var lvl = ns.getHackingLevel();
var myport = 0;

//Check for avalible port programs.
for (var i = 0; i < 1; i++) {
	//Check for avalibe programs
	//check for BruteSSH
	var ssh = (ns.fileExists("brutessh.exe", "home"))
	if (ssh == true) {
		myport = (myport + 1)
	}
	if (ssh == false) {
		myport = (myport + 0)
	}
	//check for relaySMTP
	var smtp = (ns.fileExists("relaysmtp.exe", "home"))
	if (smtp == true) {
		myport = (myport + 1)
	}
	if (smtp == false) {
		myport = (myport + 0)
	}
	//check for FTPcrack
	var ftp = (ns.fileExists("ftpcrack.exe", "home"))
	if (ftp == true) {
		myport = (myport + 1)
	}
	if (ftp == false) {
		myport = (myport + 0)
	}
	//check for HTTPworm
	var http = (ns.fileExists("httpworm.exe", "home"))
	if (http == true) {
		myport = (myport + 1)
	}
	if (http == false) {
		myport = (myport + 0)
	}
	//check for SQLinject
	var sql = (ns.fileExists("sqlinject.exe", "home"))
	if (sql == true) {
		myport = (myport + 1)
	}
	if (sql == false) {
		myport = (myport + 0)
	}
	//set myport to reflect.
}

// Start of Loop
for (var rotation = 0; rotation < 70; rotation++) {
	//Need Server list (all servers).
	//Servers 7 + 5 + 7 + 8 + 13 + 30 = 70 (-15 the zero ram list.) 
	var serverlist = ["n00dles", "nectar-net", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi",
		"neo-net", "CSEC", "zer0", "max-hardware", "iron-gym",
		"silver-helix", "the-hub", "johnson-ortho", "avmnite-02h", "phantasy", "crush-fitness", "omega-net",
		"rho-construction", "summit-uni", "millenium-fitness", "netlink", "rothman-uni", "I.I.I.I", "computek", "catalyst",
		"lexo-corp", "global-pharm", "alpha-ent", "nova-med", "run4theh111z", "snap-fitness", "zb-def", "unitalife", "univ-energy", "syscore", "aevum-police", "applied-energetics", ".",
		"zb-institute", "galactic-cyber", "omnia", "defcomm", "infocomm", "solaris", "taiyang-digital", "aerocorp", "deltaone", "icarus", "zeus-med", "darkweb", "microdyne", "helios", "vitalife", "omnitek", "clarkinc", "4sigma", "powerhouse-fitness", "titan-labs", "fulcrumtech", "stormtech", "kuai-gong", "b-and-a", "The-Cave", "blade", "nwo", "fulcrumassets", "ecorp", "megacorp"];
	//Get targets name. (server(rotation))
	var target = (serverlist[Number(rotation)])
	ns.tprint("Target name : ", target)

	//ns.killall scripts on target?
	ns.killall(target)

	ns.tprint("Avalible programs: ", myport)
	//Check for ports # needed.
	var ports = (ns.getServerNumPortsRequired(target))
	ns.tprint("    Ports needed : ", ports)

	//Can I ns.nuke it (myportlvl >= ns.nuke)
	//if true {
	//Run programs.
	//Get Root access.
	//}
	//Check for hack level. (var lvl)
	//Can I hack (myhacklvl >= targetlvl)
	var lvlt = ns.getServerNumPortsRequired(target)
	if (ns.hasRootAccess(target) == false && myport >= ports) {
		//&& lvlt <= lvl
		if (ports >= 0) {
			if (ports >= 1) {
				brutessh(target)
				ns.tprint("Brute force ", target)
				await ns.sleep(1000)
				if (ports >= 2) {
					if (ftp == true && myport >= 2) {
						ftpcrack(target)
						ns.tprint("FTPcrack ", target)
						await ns.sleep(1000)
					}
					if (ports >= 3) {
						if (smtp == true && myport >= 3) {
							relaysmtp(target)
							ns.tprint("relaySMTP ", target)
							await ns.sleep(1000)
						}
						if (ports >= 4) {
							if (http == true && myport >= 4) {
								httpworm(target)
								ns.tprint("HTTPWorm ", target)
								await ns.sleep(1000)
							}
							if (ports == 5) {
								if (sql == true && myport >= 5) {
									sqlinject(target)
									ns.tprint("SQLInject ", target)
									await ns.sleep(1000)
								}
							}
						}
					}
				}
			}

			if (myport >= ports) {
				ns.nuke(target)
				ns.tprint("Nuking ", target)
				await ns.sleep(1000)
				ns.tprint("Root Access.")
				//installBackdoor(target)
				//ns.tprint("Backdoor installed on ", target)
			}
		}
	}
	//Backdoor reminder note.
	if (target == "avmnite-02h") {
		//getserver Backdoor status?
		ns.tprint("                                Need to Backdoor ", target)
	}
	if (target == "CSEC") {
		ns.tprint("                                Need to Backdoor ", target)
	}
	if (target == "I.I.I.I") {
		ns.tprint("                                Need to Backdoor ", target)
	}
	if (target == "run4theh111z") {
		ns.tprint("                                Need to Backdoor ", target)
	}

	//check highjack.script, true
	//if true {
	//Calculate threads on target.
	if (ns.hasRootAccess(target) == true && ns.fileExists("highjack.script", "home")) {
		var m = ns.getServerMaxRam(target)
		var s = ns.getScriptRam("highjack.script")
		var q = (Math.floor(m / s))
		if (q > 0) {
			//upload highjack.script to target
			ns.scp("highjack.script", target);
			//run highjack.script on target -t #
			ns.exec("highjack.script", target, Number(q), target)
			ns.tprint("Running hack on ", target, " ", q, " times.")
			//singularity,installBackdoor(target)
			//ns.tprint("Backdoor installed on ", target)
			ns.tprint(" ")
			await ns.sleep(1000)
		}
		if (q <= 0) {
			ns.tprint("Ram is zero on ", target)
			ns.tprint(" ")
		}
	}
	if (ns.hasRootAccess(target) == false) {
		ns.tprint("Hack level too high on ", target)
		ns.tprint(" ")
	}
}

ns.tprint(" ");
ns.tprint("Starting Zero Ram list.");
ns.tprint(" ");
//Ram zero list
for (var iv = 0; iv < 24; iv++) {
	var serName = ["johnson-ortho", "crush-fitness", "computek", "nova-med", "snap-fitness", "zb-def", "syscore", "galactic-cyber", "defcomm", "infocomm", "taiyang-digital", "aerocorp", "deltaone", "icarus", "zeus-med", "clarkinc", "4sigma", "stormtech", "kuai-gong", "b-and-a", "nwo", "fulcrumassets", "ecorp", "megacorp"]
	// 15 servers
	var t = serName[Number(iv)]
	if (ns.hasRootAccess(t) == true && lvl >= lvlt) {
		var m = ns.getServerMaxRam("home")
		var s = ns.getScriptRam("highjack.script")
		var q = (Math.floor((m / s) / 24))
		ns.exec("highjack.script", "home", Number(q), t)
		ns.tprint("Running hack on ", t, " ", q, " times.")
		await ns.sleep(1000)
	}
	if (ns.hasRootAccess(t) == false) {
		ns.tprint("Hack level too high on ", target)
		//ns.tprint(" ")
	}
}
ns.tprint("Complete.");


//								if (ports >= 1) {
//									brutessh(target)
//									ns.tprint("Brute force ", target)
//									await ns.sleep(1000)
//								}
//								if (ports == 2) {
//									if (ftp == true && myport >= 2) {
//										ftpcrack(target)
//										ns.tprint("FTPcrack ", target)
//										await ns.sleep(1000)
//									}
//								}
//								if (ports == 3) {
//									if (smtp == true && myport >= 3) {
//										relaysmtp(target)
//										ns.tprint("relaySMTP ", target)
//										await ns.sleep(1000)
//									}
//								}
//								if (ports == 4) {
//									if (http == true && myport >= 4) {
//										httpworm(target)
//										ns.tprint("HTTPWorm ", target)
//										await ns.sleep(1000)
//									}
//								}
//								if (ports == 5) {
//									if (sql == true && myport >= 5) {
//										sqlinject(target)
//										ns.tprint("SQLInject ", target)
//										await ns.sleep(1000)
//									}
//				if (myport >= ports) {
//					ns.nuke(target)
//					ns.tprint("Nuking ", target)
//					await ns.sleep(1000)
//					ns.tprint("Root Access.")
//					installBackdoor(target)
//					ns.tprint("Backdoor installed on ", target)
//				}

}