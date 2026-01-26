FROM node:20 AS test-stage

WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npx jest src/components/TodoItem.test.jsx --watchAll=false

FROM node:20 AS build-stage

WORKDIR /usr/src/app
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]