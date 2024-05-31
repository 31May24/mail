
# Sample Dockerfile for NodeJS Apps

FROM node:12-alpine

ENV NODE_ENV=production

WORKDIR /Ooq39d9dn093nddksa8

# Install dependencies first
COPY package.json package-lock.json* ./
RUN npm install --production

# Copy the entire application code
COPY . .

EXPOSE 3000

CMD [ "node", "server.js" ]
