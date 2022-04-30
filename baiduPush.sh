#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 百度链接推送
# 在linux terminal 执行以下命令，成功返回success。site=site.daotoyi.cn or site=http[s]://site.daotoyi.cn 均OK。
# curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=http://daotoyi.cn&token=yhmf8JTkG1QzLQSh" 
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=site.daotoyi.cn&token=yhmf8JTkG1QzLQSh"

rm -rf urls.txt # 删除文件
