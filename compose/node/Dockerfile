FROM node:6.11.0

RUN useradd --user-group --create-home --shell /bin/false app &&\
  npm install -g pm2 && npm install -g bower

ENV HOME=/home/app


COPY package.json $HOME/quiz-backend/
RUN chown -R app:app $HOME/*

USER app
WORKDIR $HOME/quiz-backend/quiz-frontend
WORKDIR $HOME/quiz-backend
RUN npm install --production

USER root
COPY . $HOME/quiz-backend
RUN chown -R app:app $HOME/*

USER app

CMD ["pm2", "start", "--no-daemon", "processes.json"]

