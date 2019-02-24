# sock5-client-windows

sock5 client windows is one compact sock5 client for windows. if you are in limited network for reason of security or client statistics. Typical usage such as visiteingGooge from China, then there is one option that setup one proxh server then you can proxy to Google from one linux VPS out of mainland. Because there is SSH server integrated and running on all linux VPS, so from client, the most simple way to setup sock5 client is type one command:

```shell
ssh -D 1337 -q -C -N user@yoursite.com
```

```
Usage: ssh [options] host [command]
Options:
  -l user     Log in using this user name.
  -n          Redirect input from /dev/null.
  -F config   Config file (default: ~/.ssh/config).
  -A          Enable authentication agent forwarding.
  -a          Disable authentication agent forwarding (default).
  -X          Enable X11 connection forwarding.
  -x          Disable X11 connection forwarding (default).
  -i file     Identity for public key authentication (default: ~/.ssh/identity)
  -t          Tty; allocate a tty even if command is given.
  -T          Do not allocate a tty.
  -v          Verbose; display verbose debugging messages.
              Multiple -v increases verbosity.
  -V          Display version number only.
  -q          Quiet; don't display any warning messages.
  -f          Fork into background after authentication.
  -e char     Set escape character; ``none'' = disable (default: ~).
  -c cipher   Select encryption algorithm
  -m macs     Specify MAC algorithms for protocol version 2.
  -p port     Connect to this port.  Server must be on the same port.
  -L listen-port:host:port   Forward local port to remote address
  -R listen-port:host:port   Forward remote port to local address
              These cause ssh to listen for connections on a port, and
              forward them to the other side by connecting to host:port.
  -D port     Enable dynamic application-level port forwarding.
  -C          Enable compression.
  -N          Do not execute a shell or command.
  -g          Allow remote hosts to connect to forwarded ports.
  -1          Force protocol version 1.
  -2          Force protocol version 2.
  -4          Use IPv4 only.
  -6          Use IPv6 only.
  -o 'option' Process the option as if it was read from a configuration file.
  -s          Invoke command (mandatory) as SSH2 subsystem.
  -b addr     Local IP address.
```

Meanwhile, I think from user friendly perspective, I can image that you wish that ONLY unaccessible website go though sock5 proxy server, and others go normal network routing. so this small client integrated one tiny http server(pac.exe) play as autoconf PAC server, then you can program one PAC file for proxy auto conf. see https://en.wikipedia.org/wiki/Proxy_auto-config.

## How To Use

1. edit sockVPN.bat, change your ssh server info, user@yoursite.com, see above help text for detail.

2. change autoconfig.pac following your requirement.

3. double click sockVPN.bat, it will lauch http server and then open ssh sock client.

4. if your default browser is open and showing VPN started, and you can find system tray. then you are success. 

5. you can change your http server from pac.exe's GUI.

 ## Setup browser  

In any browser of firefox, chrome or IE, you can find your Internet Option/Network Settings. Take firefox for example, open Options in menu, then in "about:preferences", scroll to bottom, you can see "Network Settings"

![](https://raw.githubusercontent.com/alexmao86/sock5-client-windows/master/firefox-settings-snapshot.jpg)