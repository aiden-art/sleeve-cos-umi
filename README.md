# fengxiu-cos-umi
 风袖C端项目


### 自动部署

通过触发`github`的`webhook`钩子,阿里云无法`clone`项目，故采用`ssh`方案

更新`webhook`后需要重新启动`pm2`

`docker`对外暴露`80`端口

`docker`构建镜像和运行容器时要注意网络问题`--net=host`