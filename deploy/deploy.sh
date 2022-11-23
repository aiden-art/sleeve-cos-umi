echo "---------docker login--------"
docker login --username=$1 registry.cn-hangzhou.aliyuncs.com --password=$2

echo "---------docker stop&rm container...--------"
docker ps -a -f "name=sleeve-cos-container" --format="{{.Names}}" | xargs -r docker stop | xargs -r docker rm

echo "---------docker start rm image...--------"
docker rmi registry.cn-hangzhou.aliyuncs.com/sleeve/sleeve-cos:latest

echo "---------docker start pull image...--------"
docker pull registry.cn-hangzhou.aliyuncs.com/sleeve/sleeve-cos:latest

echo "---------docker start create container...--------"
docker run -d -p 8888:80 --name sleeve-cos-container registry.cn-hangzhou.aliyuncs.com/sleeve/sleeve-cos:latest

echo "---------deploy success--------"