FROM node AS build
WORKDIR /app
COPY . .
RUN npm install
#COPY . .
RUN npm run build
FROM nginx:latest AS deploy
WORKDIR /var/www/html 
COPY --from=build /app/build/ .