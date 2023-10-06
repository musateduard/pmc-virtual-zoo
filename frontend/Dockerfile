FROM node:18.18.0-bookworm

WORKDIR /frontend

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

ENTRYPOINT ["npm"]
CMD ["run", "serve"]
