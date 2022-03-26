#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build
# yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

deploy_github(){
    # deploy to github pages
    echo 'site.daotoyi.com' > CNAME

    if [ -z "$GITHUB_TOKEN" ]; then
        msg='deploy'
        githubUrl=git@github.com:daotoyi/site.git
    else
        msg='deploy from github actions'
        githubUrl=https://daotoyi:${GITHUB_TOKEN}@github.com/daotyi/site.git
        git config --global user.name "daotoyi"
        git config --global user.email "wenhuas.shi@gmail.com"
    fi
    git init
    git add -A
    git commit -m "${msg}"
    git push -f $githubUrl main:gh-pages # 推送到github gh-pages分支
}

deploy_coding(){
    # deploy to coding pages
    echo 'www.daotoyi.com\ndaotoyi.com' > CNAME  # 自定义域名
    # echo 'google.com, pub-7828333725993554, DIRECT, f08c47fec0942fa0' > ads.txt # 谷歌广告相关文件

    if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
        codingUrl=git@e.coding.net:daotoyi/daotoyi.git
    else
        codingUrl=https://HmuzsGrGQX:${CODING_TOKEN}@e.coding.net/daotoyi/daotoyi.git
    fi
    git add -A
    git commit -m "${msg}"
    git push -f $codingUrl master # 推送到coding
}

deploy_github
deploy_coding

cd -
rm -rf docs/.vuepress/dist
