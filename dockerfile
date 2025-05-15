# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

# Copy rest of the app
COPY . .


EXPOSE 5000

# Start the app
CMD ["node", "index.js"]
