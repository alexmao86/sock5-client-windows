@echo off
start pac.exe
ssh -D 1337 -q -C -N user@yoursite.com