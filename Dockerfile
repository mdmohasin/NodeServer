FROM node:slim
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 8082
CMD ["npm", "start"]