# sock5-client-windows

sock5 client windows is one compact sock5 client for windows. if you are in limited network for reason of security or client statistics. Typical usage such as visiteing Googe from China, then there is one option that setup one proxh server then you can proxy to Google from one linux VPS out of mainland. Because there is SSH server integrated and running on all linux VPS, so from client, the most simple way to setup sock5 client is type one command:

```shell
ssh -D 1337 -q -C -N user@yoursite.com
```

Meanwhile, I think from user friendly perspective, I can image that you wish that ONLY unaccessible website go though sock5 proxy server, and others go normal network routing. so this small client integrated one tiny http server(pac.exe) play as autoconf PAC server, then you can program one PAC file for proxy auto conf. see https://en.wikipedia.org/wiki/Proxy_auto-config.

## How To Use

1. edit sockVPN.bat, change your ssh server info, user@yoursite.com, see above help text for detail.

2. change autoconfig.pac following your requirement.

3. double click sockVPN.bat, it will lauch http server and then open ssh sock client. it will ask you to accept RAS footprint, type 'yes', then input password.

4. if your default browser is open and showing VPN started, and you can find system tray. then you are success.  JUST KEEP CMD window running!

 ## Setup browser  

In any browser of firefox, chrome or IE, you can find your Internet Option/Network Settings. Take firefox for example, open Options in menu, then in "about:preferences", scroll to bottom, you can see "Network Settings"

![](https://raw.githubusercontent.com/alexmao86/sock5-client-windows/master/firefox-settings-snapshot.jpg)

default http port is 8000, default ssh sock port is 1337. you can find sock5 proxy settings in any other software supports sock5 proxy. 

## sock5-client-windows
sock5 client windows 是一个轻量级的sock5 windows客户端。如果你在有限制的网络里，无论是安全限制或者你想统计网络使用。典型的使用场景是在大陆访问谷歌，那么有一种方式是通过你在其他国家的虚拟云服务器架设一个代理服务器。因为所有的linux VPS服务器都已经集成了SSH服务器并且默认是运行的，所以，你在服务器上根本不需要再安装任何软件即可使用代理服务。从客户端，最简单的方法是敲一个ssh命令创建一个sock5客户端即可：

```shell
ssh -D 1337 -q -C -N user@yoursite.com
```
同时，从用户友好的角度设想，我可以想象你期望的网络是只有受限的网址需要通过代理访问，其他普通网络则按正常的方式访问，这样不影响速度。所以，这个小客户端集成了一个微型的http服务器作为一个PAC服务器，你可以自己编写一个pac文件实现自动化配置代理。https://baike.baidu.com/item/PAC/16292100
## 使用方法

1. 编辑sockVPN.bat, 修改你的ssh服务器信息，一般只需要修改服务器地址。

2. 修改 autoconfig.pac.

3. 双击 sockVPN.bat, 它会启动一个控制台窗口，里面启动了一个http服务器和一个ssh sock端口服务。第一次运行会让你接受rsa指纹，输入yes。然后输入服务器密码。

## ssh command help
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


