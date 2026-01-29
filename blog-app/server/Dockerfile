FROM node:20
  
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install --omit=dev
COPY --chown=node:node . .

ENV DEBUG=server:*
  
USER node

EXPOSE 3003
ENV NODE_ENV=production

CMD ["node", "index.js"]