FROM node:20 AS test-stage

WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npx jest src/components/TodoItem.test.jsx --watchAll=false

FROM node:20 AS build-stage

WORKDIR /usr/src/app
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build




