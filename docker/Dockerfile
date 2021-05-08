FROM peternguyentr/node-java-chrome:latest

COPY codecept.conf.js /app/
COPY package.json /app/
COPY docker/run-tests.sh /app/docker/
COPY features /app/features
COPY pages /app/pages
COPY step_definitions /app/step_definitions

WORKDIR /app
RUN npm install

ONBUILD ADD . /app
ONBUILD WORKDIR /app
ONBUILD RUN npm install

CMD ["/app/docker/run-tests.sh"]
