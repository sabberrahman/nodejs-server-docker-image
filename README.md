## 🚀 Node.js Dockerized App

This is a simple Node.js application structured with Docker and Docker Compose, using environment variables securely.

## 📁 Project Structure
 ```bash
project-root/
│ index.js
│ package.json
│ .env 
│ .env.example # Sample env file (SAFE TO COMMIT)
│ Dockerfile
│ docker-compose.yml
│ .dockerignore
├── Controller/
├── model/
```

 ## ⬇️ Pull and Run from Docker Hub

Then run it with your local .env:
```bash
docker pull sabberrahman/login_server:1.0.0
```
Then run it with your local .env
```bash
docker run --env-file .env -p 5000:5000 sabberrahman/login_server:1.0.0
```
>Make sure you have a valid .env file in the same directory when running this command.

---------


🔐 Environment Variables
Create a .env file based on the provided .env.example:

```bash
cp .env.example .env
```
Update it with your real values:

```env
MONGODB_URL=your-mongo-url
JWT_SECRET=your-secret
```
