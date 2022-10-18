/** @param {import(".").NS } ns */
export async function main(ns) {

//    for (var check0 = 0; check0 < 25; check0++) {
//    //Check for ServerNames ("server00-24")
//      var avaServer = ["server00", "server01", "server02", "server03", "server04",
//                       "server05", "server06", "server07", "server08", "server09",
//                       "server10", "server11", "server12", "server13", "server14",
//                       "server15", "server16", "server17", "server18", "server19",
//                       "server20", "server21", "server22", "server23", "server24"]
//      var check1 = avaServer[Number(check0)]
//    //Get funds = avalibleMoney()
//    //Get check1 cost
//    //do math- is avalibleMoney > cost = T or F
//    //
//    }

    for (var i = 0; i < 70; i++) {
        //Need Server list (all servers).
        //Servers 7 + 5 + 7 + 8 + 13 + 30 = 70 (-15 the zero ram list.) 
        var serName = ["n00dles", "nectar-net", "foodnstuff", "sigma-cosmetics", "joesguns", "hong-fang-tea", "harakiri-sushi",
            "neo-net", "CSEC", "zer0", "max-hardware", "iron-gym",
            "silver-helix", "the-hub", "johnson-ortho", "avmnite-02h", "phantasy", "crush-fitness", "omega-net",
            "rho-construction", "summit-uni", "millenium-fitness", "netlink", "rothman-uni", "I.I.I.I", "computek", "catalyst",
            "lexo-corp", "global-pharm", "alpha-ent", "nova-med", "run4theh111z", "snap-fitness", "zb-def", "unitalife", "univ-energy", "syscore", "aevum-police", "applied-energetics", ".",
            "zb-institute", "galactic-cyber", "omnia", "defcomm", "infocomm", "solaris", "taiyang-digital", "aerocorp", "deltaone", "icarus", "zeus-med", "darkweb", "microdyne", "helios", "vitalife", "omnitek", "clarkinc", "4sigma", "powerhouse-fitness", "titan-labs", "fulcrumtech", "stormtech", "kuai-gong", "b-and-a", "The-Cave", "blade", "nwo", "fulcrumassets", "ecorp", "megacorp"];
        //Get targets name. (server(i))
        //var target = (serName[Number(i)])
        //tprint("Target name : ", target)

        var serverName = getHostname()
        var t = serName[Number(i)]
        var lvl = getHackingLevel()
        var tlvl = getServerRequiredHackingLevel(t)
        if (hasRootAccess(t) == false && lvl >= tlvl ) {
            await brutessh(t)
            tprint("Brute force ", t)
            //sleep(1000)
            await ftpcrack(t)
            tprint("FTPcrack ", t)
            //sleep(1000)
            await relaysmtp(t)
            tprint("relaySMTP ", t)
            //sleep(1000)
            await httpworm(t)
            tprint("HTTPWorm ", t)
            //sleep(1000)
            await sqlinject(t)
            tprint("SQLInject ", t)
            //sleep(1000)
            await nuke(t)
            tprint("Nuking ", t)
            //sleep(1000)
        }
        if (hasRootAccess(t) == true && lvl >= tlvl && fileExists("highjack.script", serverName)) {
            var m = getServerMaxRam(serverName)
            var s = getScriptRam("highjack.script")
            var q = (Math.floor((m / s) / 70))
            exec("highjack.script", serverName, Number(q), t)
            tprint("Target name: ", t)
            tprint("Hack Level : ", tlvl)
            tprint("Running hack on ", t, " ", q, " times.")
            //sleep(1000)
        }
    }
    
    tprint("Complete.");

 }

//ns.getHostname()