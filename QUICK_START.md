# 🚀 Merch-Tool Quick Start Guide

## Overview
Merch-Tool is a comprehensive platform for analyzing merchandise products across multiple e-commerce platforms. It provides keyword analysis, trend detection, trademark verification, and automated product scraping.

## ✅ What's Completed

### Backend (FastAPI)
- ✅ Full REST API structure
- ✅ Authentication endpoints
- ✅ Product search endpoints
- ✅ Keyword analysis endpoints
- ✅ Trend detection endpoints
- ✅ Trademark checking endpoints
- ✅ Database models (PostgreSQL)
- ✅ Redis caching setup
- ✅ Elasticsearch integration
- ✅ Dependencies installed (Python 3.13 compatible)
- ✅ Server running on `http://localhost:8000`

### Frontend (Next.js 14)
- ✅ Complete authentication flow (signin, signup, forgot password)
- ✅ Dashboard with stats and activity
- ✅ Product search with advanced filters
- ✅ Keyword analysis tool
- ✅ Trend analysis with charts
- ✅ Saved products page
- ✅ Settings page (4 tabs)
- ✅ Professional UI/UX with Tailwind CSS
- ✅ Protected routes
- ✅ Header/Footer navigation
- ✅ Responsive design
- ✅ TypeScript with no errors
- ✅ Server running on `http://localhost:3000`

### Infrastructure
- ✅ Docker Compose configuration
- ✅ PostgreSQL database
- ✅ Redis cache
- ✅ Elasticsearch search engine

## 🏃 Running the Application

### Prerequisites
- Python 3.13
- Node.js 20+
- Docker & Docker Compose (for databases)

### 1. Start Backend

```bash
cd backend

# Activate virtual environment
source venv/bin/activate

# Install dependencies (if not done)
pip install -r app/requirements.txt

# Run the server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

Backend will be available at:
- **API**: http://localhost:8000
- **Docs**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

### 2. Start Frontend

```bash
cd frontend

# Install dependencies (if not done)
npm install

# Run development server
npm run dev
```

Frontend will be available at:
- **App**: http://localhost:3000

### 3. Start Databases (Optional)

```bash
# From project root
docker-compose up -d
```

This starts:
- PostgreSQL on port 5432
- Redis on port 6379
- Elasticsearch on port 9200

## 📚 API Documentation

Access interactive API docs at: http://localhost:8000/docs

### Available Endpoints

#### Authentication
```
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/refresh
POST /api/v1/auth/logout
```

#### Products
```
GET  /api/v1/products/search?q=query&platform=amazon
GET  /api/v1/products/{product_id}
POST /api/v1/products/compare
POST /api/v1/products/scrape
```

#### Keywords
```
POST /api/v1/keywords/analyze
GET  /api/v1/keywords/suggestions?keyword=example
GET  /api/v1/keywords/trending
POST /api/v1/keywords/batch-analyze
```

#### Trends
```
GET  /api/v1/trends/current
GET  /api/v1/trends/historical?days=30
GET  /api/v1/trends/categories
```

#### Trademarks
```
POST /api/v1/trademarks/check
GET  /api/v1/trademarks/status/{check_id}
```

## 🎯 User Guide

### New User Flow

1. **Visit Homepage** → http://localhost:3000
2. **Sign Up** → Click "Get Started" → Fill registration form
3. **Sign In** → Use credentials to login
4. **Dashboard** → View your stats and activity

### Key Features

#### 🔍 Product Search
1. Go to **Products** page
2. Enter search query
3. Apply filters (platform, category, price range)
4. View results and pagination
5. Click to view product details

#### 🏷️ Keyword Analysis
1. Go to **Keywords** page
2. Enter a keyword (e.g., "vintage t-shirts")
3. Click "Analyze"
4. View metrics:
   - Search volume
   - Competition level
   - CPC
   - Trend percentage
5. See related keywords
6. Get insights and recommendations
7. Save keywords for later

#### 📈 Trend Analysis
1. Go to **Trends** page
2. Select timeframe (day, week, month, quarter, year)
3. Filter by category
4. View:
   - Trending items table with rankings
   - Search volume chart
   - Top categories
   - Emerging trends
   - Quick insights

#### 💾 Save Products
1. On any product card, click "Save"
2. Go to **Saved** page
3. Filter by category
4. Sort by different criteria
5. Export list
6. Remove products

#### ⚙️ Settings
1. Go to **Settings** page
2. Update profile information
3. Configure preferences:
   - Notifications
   - Language
   - Theme
4. Set API settings:
   - Auto-scraping
   - Frequency
   - Cache settings
5. Change password
6. Enable 2FA

## 🛠️ Development

### Project Structure

```
Merch-tool/
├── backend/
│   ├── app/
│   │   ├── api/routes/        # API endpoints
│   │   ├── db/                # Database models
│   │   ├── services/          # Business logic
│   │   ├── utils/             # Utilities
│   │   ├── main.py            # FastAPI app
│   │   └── requirements.txt
│   └── venv/                  # Python virtual env
│
├── frontend/
│   ├── src/
│   │   ├── app/               # Next.js pages
│   │   ├── components/        # React components
│   │   ├── contexts/          # React contexts
│   │   └── lib/               # Utilities
│   ├── public/                # Static files
│   └── package.json
│
├── docker-compose.yml         # Database services
└── README.md
```

### Adding New Features

#### Backend (New Endpoint)
1. Create route in `backend/app/api/routes/`
2. Add to router in `main.py`
3. Implement service in `backend/app/services/`
4. Update database models if needed
5. Test at `/docs`

#### Frontend (New Page)
1. Create page in `frontend/src/app/`
2. Add navigation link in `Header.tsx`
3. Wrap with `ProtectedRoute` if needed
4. Create components in `components/`
5. Update API client in `lib/api.ts`

### Environment Variables

#### Backend `.env`
```env
DATABASE_URL=postgresql://user:password@localhost:5432/merchdb
REDIS_URL=redis://localhost:6379/0
ELASTICSEARCH_URL=http://localhost:9200
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
```

#### Frontend `.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

## 🔧 Troubleshooting

### Backend Issues

**Problem**: Import errors
```bash
# Solution: Reinstall dependencies
pip install -r app/requirements.txt
```

**Problem**: Database connection error
```bash
# Solution: Check PostgreSQL is running
docker-compose ps
# Restart if needed
docker-compose restart postgres
```

**Problem**: Port 8000 already in use
```bash
# Solution: Kill process or use different port
uvicorn app.main:app --reload --port 8001
```

### Frontend Issues

**Problem**: Module not found
```bash
# Solution: Reinstall node modules
rm -rf node_modules package-lock.json
npm install
```

**Problem**: TypeScript errors
```bash
# Solution: Restart TypeScript server in VS Code
# Cmd+Shift+P → "TypeScript: Restart TS Server"
```

**Problem**: Port 3000 already in use
```bash
# Solution: Use different port
PORT=3001 npm run dev
```

## 📊 Testing

### Backend Tests
```bash
cd backend
pytest tests/
```

### Frontend (Development)
```bash
cd frontend
npm run build  # Check for build errors
npm run lint   # Check code quality
```

## 🚀 Deployment

### Backend (Production)
```bash
# Use gunicorn with uvicorn workers
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker
```

### Frontend (Production)
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📝 Next Steps

### Immediate TODOs
1. ✅ Frontend complete
2. ⏳ Connect frontend to backend APIs
3. ⏳ Implement actual scraping logic
4. ⏳ Add real keyword analysis algorithms
5. ⏳ Implement trademark API integration
6. ⏳ Set up database migrations
7. ⏳ Add unit tests
8. ⏳ Add integration tests

### Future Enhancements
- Real-time notifications (WebSockets)
- Data export (CSV, PDF)
- Advanced analytics dashboard
- Mobile app (React Native)
- Chrome extension
- API rate limiting
- Caching optimization
- Performance monitoring

## 🤝 Contributing

1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## 📄 License

MIT License

---

**Version**: 1.0.0  
**Last Updated**: January 2024  
**Status**: ✅ Frontend Complete | ⏳ Backend Integration Pending
