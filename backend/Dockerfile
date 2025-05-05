# Use a Node.js 18 base image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available) first for better caching
COPY package*.json ./

# Install dependencies (using npm ci for a clean install)
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Install nodemon as a dev dependency for development
RUN npm install --only=dev

# Expose the port your app runs on (assuming 5000 in this case)
EXPOSE 5000

# Command to run the app in development mode with nodemon
CMD ["npm", "run", "dev"]
