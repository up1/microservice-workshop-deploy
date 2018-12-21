FROM node:10.14.2
WORKDIR /src
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3002
CMD [ "npm", "start" ]