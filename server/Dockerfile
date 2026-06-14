FROM node:26-alpine AS builder

WORKDIR /usr/src/app

# env variable to incite
# different behavioral changes to 
# code life cycle
ENV CI_ENV=development

COPY . .
RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--port", "3000", "--host", "0.0.0.0"]
