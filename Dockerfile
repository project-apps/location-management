FROM node:6-alpine

ADD views /location-management/views
ADD package.json /location-management
ADD index.js /location-management

RUN cd /location-management; npm install

ENV NODE_ENV production
ENV PORT 8080
EXPOSE 8080

WORKDIR "/location-management"
CMD [ "npm", "start" ]