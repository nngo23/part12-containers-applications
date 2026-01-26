FROM node:20
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci 

ENV DEBUG=playground:*
  
USER node

EXPOSE 3000
ENV NODE_ENV=production

CMD ["node", "server.js"]
