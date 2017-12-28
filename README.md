# vue2-cordova-publicOpinion
hybridApp based on vue2 and cordova

# 说明
> 项目基于 : vue2 + vue-router + cordova + nodejs

> backend后端目录, hybridApp是cordova工程目录, publicOpinion是vue工程目录

> vue打包后可生成浏览器访问的webapp, 同时生成html,css,js文件到cordova工程目录，经cordova打包后生成apk或ipa


# 运行
``` bash
# 1. git clone git@github.com:Hardcore0331/vue2-cordova-publicOpinion.git

# 2. 安装后台依赖，启动node服务器

cd backend

npm install

npm start

# 3. 启动/打包前台

cd publicOpinion

npm install  安装依赖

npm run dev  开发模式(热更新)，访问127.0.0.1:8080查看效果

npm run build  生产模式，打包后文件生成在hybridApp\www目录(publicOpinion/config/prod.env.js中的URL需要配置为后台启动的ip地址再打包，否则生成的hybrid无法连接后台)

# 4. 生成hybrid app

cd hybridApp

cordova platform add android (cordova platform add ios)

cordova build android 

```