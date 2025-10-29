# 🚀 Quick Start Guide

## ✅ Setup Complete!

Your Merch-tool project is ready to go! The backend dependencies have been installed successfully with Python 3.13 compatible versions.

## 🎯 What's Working

- ✅ Backend project structure created
- ✅ Python dependencies installed (Python 3.13 compatible)
- ✅ Playwright browsers installed
- ✅ FastAPI server running on http://localhost:8000
- ✅ API documentation available at http://localhost:8000/docs

## 📋 Next Steps

### 1. **Check the API** (Backend is already running!)
Visit: http://localhost:8000/docs to see the interactive API documentation

### 2. **Setup the Frontend**
```bash
cd frontend
npm install
npm run dev
```
Then visit: http://localhost:3000

### 3. **Setup Databases** (Optional - for full functionality)

#### Using Docker (Easiest):
```bash
cd infra
docker-compose up -d postgres redis elasticsearch
```

#### Or install manually:
- PostgreSQL: `sudo apt install postgresql`
- Redis: `sudo apt install redis-server`
- Elasticsearch: Download from elastic.co

### 4. **Configure Environment**
```bash
cd backend
cp .env.example .env
# Edit .env with your database credentials
```

## 🔧 Development Commands

### Backend
```bash
cd backend
source venv/bin/activate

# Start dev server
uvicorn app.main:app --reload

# Run tests
pytest

# Check API health
curl http://localhost:8000/health
```

### Frontend
```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Lint
npm run lint
```

### Docker (All services)
```bash
cd infra

# Start everything
docker-compose up -d

# View logs
docker-compose logs -f

# Stop everything
docker-compose down
```

## 🧪 Test the API

Try these endpoints:

```bash
# Health check
curl http://localhost:8000/health

# Root endpoint
curl http://localhost:8000/

# Search products (returns empty for now)
curl "http://localhost:8000/api/products/search?query=test"

# Analyze keyword
curl "http://localhost:8000/api/keywords/analyze?keyword=shirt"

# Check trademark
curl "http://localhost:8000/api/trademarks/check?phrase=test"
```

## 📚 Project Structure Overview

```
Merch-tool/
├── backend/           ← FastAPI (READY TO USE!)
├── frontend/          ← Next.js (needs npm install)
├── infra/             ← Docker configs
└── README.md          ← Full documentation
```

## 🐛 Troubleshooting

### Issue: pandas installation failed
**Solution**: Updated to Python 3.13 compatible versions ✅

### Issue: Virtual environment not activating
**Solution**: Use full path:
```bash
source /home/bihi/Desktop/Merch-tool/backend/venv/bin/activate
```

### Issue: Port 8000 already in use
**Solution**: 
```bash
# Kill the process using port 8000
sudo lsof -ti:8000 | xargs kill -9

# Or use a different port
uvicorn app.main:app --port 8001
```

## 📖 Documentation

- Full README: `README.md`
- Backend docs: `backend/README.md`
- API docs: http://localhost:8000/docs
- Infrastructure: `infra/README.md`

## 🎉 You're All Set!

The backend is running and ready for development. The frontend just needs `npm install` and you'll have a full-stack application ready to go!

**Current Status:**
- Backend Server: ✅ Running on http://localhost:8000
- API Documentation: ✅ http://localhost:8000/docs
- Frontend: ⏳ Needs npm install
- Databases: ⏳ Optional (use Docker or install manually)

Happy coding! 🚀
