var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+Auto Proxy", {
    "+Auto Proxy": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)jobinja\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)irancell\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ikco\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)cloudflare\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)image$/.test(host)) return "DIRECT";
        if (/(?:^|\.)techtik\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)imerat\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)melkradar\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)eitaa\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)aradmobile\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)faranesh\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)uproad\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)rqb\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)warmane\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ncr\.ir$/.test(host)) return "DIRECT";
        if (/^31\.3\.253\.213$/.test(host)) return "DIRECT";
        if (/(?:^|\.)rqbank\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)rb24\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)refah-bank\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)tosinso\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)crm-test$/.test(host)) return "DIRECT";
        if (/^kara\.orchidpharmed\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)orchidpharmed\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)zoodfood\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)abplus\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)ba24\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)soft98\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)itpro\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)sadadpsp\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)nic\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)afranet\.com$/.test(host)) return "DIRECT";
        if (/^79\.175\.181\.41$/.test(host)) return "DIRECT";
        if (/(?:^|\.)p30download\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)realtimeboard\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)aparat\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)digikala\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)itbazar\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)technet24\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)bmi\.ir$/.test(host)) return "DIRECT";
        if (/(?:^|\.)shatelland\.com$/.test(host)) return "DIRECT";
        if (/192\.168\./.test(host)) return "DIRECT";
        if (/^192\.168\./.test(host)) return "DIRECT";
        if (/^10\.10\./.test(host)) return "DIRECT";
        if (/^127\./.test(host)) return "DIRECT";
        if (/^10\./.test(host)) return "DIRECT";
        if (/^172\.16\./.test(host)) return "DIRECT";
        if (/^172\.17\./.test(host)) return "DIRECT";
        if (/^172\.18\./.test(host)) return "DIRECT";
        if (/^172\.19\./.test(host)) return "DIRECT";
        if (/^172\.20\./.test(host)) return "DIRECT";
        if (/^172\.21\./.test(host)) return "DIRECT";
        if (/^172\.22\./.test(host)) return "DIRECT";
        if (/^172\.23\./.test(host)) return "DIRECT";
        if (/^172\.24\./.test(host)) return "DIRECT";
        if (/^172\.25\./.test(host)) return "DIRECT";
        if (/^172\.26\./.test(host)) return "DIRECT";
        if (/^172\.27\./.test(host)) return "DIRECT";
        if (/^172\.28\./.test(host)) return "DIRECT";
        if (/^172\.29\./.test(host)) return "DIRECT";
        if (/^172\.30\./.test(host)) return "DIRECT";
        if (/^172\.31\./.test(host)) return "DIRECT";
        if (/^192\.168\./.test(host)) return "DIRECT";
        if (/bertina\.us$/.test(host)) return "DIRECT";
        return "+Doris";
    },
    "+Doris": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 37.59.93.12:8520";
    }
});