FROM strapi/base
WORKDIR /my-path
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn
RUN rm -rf node_modules/sharp
RUN npm install --arch=x64 --platform=linux sharp
COPY . .
RUN yarn build
EXPOSE 1337
CMD ["yarn", "start"]