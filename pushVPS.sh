#!/usr/bin/env sh

src=docs/.vuepress/dist/
des=/root/dyDocker/html/daotoyi
rhost=root@daotoyi.tk

rsync -avzh  ${src} ${rhost}:${des}

exit 0
