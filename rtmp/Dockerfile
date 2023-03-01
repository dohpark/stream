FROM tiangolo/nginx-rtmp

COPY nginx.conf /etc/nginx/nginx.conf

RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y ffmpeg