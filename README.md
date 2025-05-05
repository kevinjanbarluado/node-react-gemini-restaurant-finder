# AI-Powered Restaurant Finder

![image](https://github.com/user-attachments/assets/6c782e64-1f93-4c03-b7a7-857852fe2825)

A full-stack web app that uses Gemini AI to help users find restaurants based on natural language prompts.

✅ Built with Vite + React (frontend) and Express + TypeScript (backend)

❌ No external restaurant API like Foursquare used (yet) – still awaiting approval


## 🚀 Project Setup
### 1. Clone the Repository
```bash
git clone https://github.com/kevinjanbarluado/node-react-gemini-restaurant-finder.git
cd node-react-gemini-restaurant-finder
```
### 2. Set up environment variables

You'll need a Gemini API key to make this work.
Copy the .env.example file in both backend and frontend folders:
```bash
# Backend
cp backend/.env.example backend/.env

# Frontend
cp frontend/.env.example frontend/.env
```
- Edit `backend/.env` file and replace `GOOGLE_GEMINI_API_KEY` with your own key.

### 3. Install dependencies
``` bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```
### 4. Build TypeScript (Backend only)
You need to run this to convert TypeScript to JavaScript:
``` bash
cd backend
npm run build
```

### 5. Run the app
Using Docker (Recommended)
``` bash
docker-compose up -d --build
```
Or run manually:
``` bash
# In one terminal: start backend
cd backend
npm run dev

# In another terminal: start frontend
cd frontend
npm run dev
```

## 🌐 Ports
- Frontend (React + Vite): http://localhost:5173
- Backend (Express): http://localhost:5000

## 📬 API Testing (Optional)

You can test the backend API using the included Postman collection:

Import the file `postman_example_collection.json` into Postman.

- It includes the following requests:

- Health Check – Test if the backend is running.
- Send message – Send a natural language prompt to extract restaurant info.
- Foursquare – (Currently mocked) Search for restaurants using Gemini.

>⚠️ The Foursquare endpoint is using AI responses for now because actual API access is still pending approval.

## 🎯 Challenges & Notes
- Gemini AI powers all restaurant logic (intent extraction, data structuring, etc.)
- Foursquare integration is planned but currently not active (pending API approval)

## 📝 Prerequisites
- Node.js version: v18.20.8 (You can use nvm to install this version if needed)
