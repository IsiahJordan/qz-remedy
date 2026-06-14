FROM node:26-alpine AS builder

# env variable to incite
# different behavioral changes to 
# code life cycle
ENV CI_ENV=development

WORKDIR /usr/src/server

COPY . . 
RUN npm ci

EXPOSE 5000

CMD ["npm", "run", "dev", "--", "--port", "5000", "--host", "0.0.0.0"]
