# vue2-cordova-publicOpinion
hybridApp based on vue2 and cordova

# 说明
> 项目基于 : vue2 + vue-router + cordova + nodejs

> backendshi是后端目录, hybridApp是cordova工程目录, publicOpinion是vue工程目录

> vue打包后可生成浏览器访问的webapp, 同时生成html,css,js文件到cordova工程目录, 经cordova打包后生成apk或ipa


# 运行
``` bash
# 0. 需要安装 node npm bower cordova

bower： npm install -g bower

cordova： npm install -g cordova
  

# 1. git clone git@github.com:Hardcore0331/vue2-cordova-publicOpinion.git

# 2. 安装后端依赖，启动node服务器

cd backend

npm install

npm start

# 3. 启动/打包前端

cd publicOpinion

npm install  安装依赖

npm run dev  开发模式(热更新)，访问127.0.0.1:8080查看效果

配置publicOpinion/config/prod.env.js中的URL为后台启动的ip地址(否则生成的hybrid无法连接后台)
npm run build  生产模式,打包后文件生成在hybridApp\www目录

# 4. 生成hybrid app

cd hybridApp

cordova platform add android (cordova platform add ios)

cordova build android 
(需安装android target/API level: 'android-26';打包如果遇到space错误,可能需要增加环境变量_JAVA_OPTIONS,值为-Xmx512M)

```