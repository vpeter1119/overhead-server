# Use Node 18 alpine as parent image
FROM node:18-alpine

# Create working directory
RUN mkdir -p /usr/src/app && chown -R node:node /usr/src/app

# Change the working directory on the Docker image to /app
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the /app directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn

# Copy the rest of project files into this image
COPY --chown=node:node . .

# Expose application port
EXPOSE 3000

# Start the application
# CMD npm run dev
