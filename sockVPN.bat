@echo off
start /B httpd/httpd.exe
start /B ssh.exe -D 1337 -q -C -N user@yoursite.com