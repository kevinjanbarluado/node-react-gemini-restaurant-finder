# Use Node.js image for development environment
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to leverage caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose port 5173 for Vite
EXPOSE 5173

# Use the Vite development server to run the app
CMD ["npm", "run", "dev"]
