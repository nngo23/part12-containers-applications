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
RUN npm run build && ls -la /usr/src/app/dist

FROM nginx:alpine AS production-stage

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]




