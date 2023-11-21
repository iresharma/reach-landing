FROM caddy:alpine
LABEL authors="iresharma"

RUN apk update && apk add --no-cache node js npm

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

RUN cp - dist/* /srv/

COPY ./Copyfile /etc/caddy/Caddyfile