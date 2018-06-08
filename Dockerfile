FROM node:8.4.0

COPY . . 
RUN npm run build --production

RUN npm install -g serve

CMD serve -s build -l 80

EXPOSE 80