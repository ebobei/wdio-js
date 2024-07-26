FROM node:14.18.2

ENV ALLURE_VERSION 2.13.0
ENV JAVA_HOME /opt/jdk-10.0.1
ENV PATH=$PATH:/opt/allure-${ALLURE_VERSION}/bin

RUN sed -i -e 's/deb.debian.org/archive.debian.org/g' \
           -e 's|security.debian.org|archive.debian.org/|g' \
           -e '/stretch-updates/d' /etc/apt/sources.list

RUN apt-get update && apt-get install -y software-properties-common tar unzip rsync wget && apt-get install -y curl

# install openjdk
RUN mkdir -p /opt/
RUN cd /tmp \
    && curl -L -k "https://download.java.net/java/GA/jdk10/10.0.1/fb4372174a714e6b8c52526dc134031e/10/openjdk-10.0.1_linux-x64_bin.tar.gz" > jre.tar.gz \
    && tar xzf /tmp/jre.tar.gz -C /opt/ \
    && ls -la /opt/

# install allure
RUN wget https://github.com/allure-framework/allurectl/releases/download/1.18.1/allurectl_linux_386 -O /usr/bin/allurectl
RUN chmod +x /usr/bin/allurectl

# Create folder and copy components
WORKDIR /app

CMD [ ! -d "/app/node_modules" ] && npm ci && /bin/bash || /bin/bash