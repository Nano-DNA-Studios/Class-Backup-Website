# Use NodeJS Alpine as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /ClassBackup

# Install dependencies
RUN npm install -g serve

# Copy Packaged Website
COPY ./dist /ClassBackup

# Expose Port 3000
EXPOSE 3000

# Start the Website on Startup
CMD ["serve", "-s", ".", "-l", "3000"]