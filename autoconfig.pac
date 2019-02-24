var domains = {
    "google.com": 1,
    "facebook.com": 1,
    "bing.com":1
};
 
var proxy = "SOCKS5 127.0.0.1:1337; SOCKS 127.0.0.1:1337; DIRECT;";
 
var direct = 'DIRECT;';
 
function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (domains.hasOwnProperty(host)) {
            return proxy;
        }
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return direct;
}