# Merch-tool

A comprehensive merchandise research and trend analysis tool for sellers on platforms like Amazon, Etsy, and Redbubble.

## 🚀 Features

- **Product Search**: Search across multiple platforms (Amazon, Etsy, Redbubble)
- **Trend Detection**: Identify trending products and emerging niches
- **Keyword Analysis**: Analyze keyword potential and get suggestions
- **Trademark Checking**: Verify if phrases are trademarked
- **Real-time Analytics**: Dashboard with charts and insights

## 🏗️ Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **PostgreSQL** - Database
- **Redis** - Caching
- **Elasticsearch** - Search engine
- **Scrapy/Playwright** - Web scraping
- **SQLAlchemy** - ORM

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Hooks** - State management

## 📁 Project Structure

```
merch-tool/
├── backend/                    # FastAPI backend
│   ├── app/
│   │   ├── main.py            # Application entry point
│   │   ├── api/routes/        # API endpoints
│   │   ├── db/                # Database models & connections
│   │   ├── services/          # Business logic
│   │   └── utils/             # Utilities
│   ├── tests/                 # Backend tests
│   └── requirements.txt       # Python dependencies
│
├── frontend/                   # Next.js frontend
│   ├── src/
│   │   ├── app/               # Next.js 14 app directory
│   │   ├── components/        # React components
│   │   ├── lib/               # API client & utilities
│   │   └── utils/             # Helper functions
│   └── package.json           # Node dependencies
│
├── infra/                      # Infrastructure & deployment
│   ├── docker-compose.yml     # Local development
│   ├── Dockerfile.*           # Container images
│   └── deploy/                # Deployment configs
│
└── README.md
```

## 🛠️ Setup

### Prerequisites
- Python 3.13+
- Node.js 20+
- PostgreSQL 15+
- Redis 7+
- Elasticsearch 8+

### Backend Setup

```bash
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r app/requirements.txt

# Install Playwright browsers
playwright install chromium

# Setup environment
cp .env.example .env
# Edit .env with your configuration

# Start server
uvicorn app.main:app --reload
```

Backend will be available at:
- API: http://localhost:8000
- Docs: http://localhost:8000/docs

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local
# Edit .env.local with your API URL

# Start development server
npm run dev
```

Frontend will be available at http://localhost:3000

### Docker Setup (Recommended)

```bash
cd infra

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

This will start:
- Backend at http://localhost:8000
- Frontend at http://localhost:3000
- PostgreSQL at localhost:5432
- Redis at localhost:6379
- Elasticsearch at http://localhost:9200

## 📚 API Documentation

Once the backend is running, visit:
- Interactive API docs: http://localhost:8000/docs
- Alternative docs: http://localhost:8000/redoc

### Main Endpoints

#### Products
- `GET /api/products/search?query={query}` - Search products
- `GET /api/products/trend?days={days}` - Get trending products
- `GET /api/products/{id}` - Get product details

#### Keywords
- `GET /api/keywords/analyze?keyword={keyword}` - Analyze keyword
- `GET /api/keywords/suggestions?seed={seed}` - Get suggestions

#### Trademarks
- `GET /api/trademarks/check?phrase={phrase}` - Check trademark
- `POST /api/trademarks/batch-check` - Batch check

#### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/token` - Login
- `GET /api/auth/me` - Get current user

## 🧪 Testing

### Backend
```bash
cd backend
source venv/bin/activate
pytest
```

### Frontend
```bash
cd frontend
npm test
```

## 🚀 Deployment

### Vercel (Frontend)
```bash
cd frontend
vercel deploy
```

### AWS (Full Stack)
See `infra/deploy/aws.yml` for CloudFormation template

### Docker Production
```bash
docker-compose -f infra/docker-compose.yml up -d
```

## 📝 Environment Variables

### Backend (.env)
```env
DATABASE_URL=postgresql://user:pass@localhost:5432/merch_tool
REDIS_HOST=localhost
REDIS_PORT=6379
ELASTICSEARCH_URL=http://localhost:9200
SECRET_KEY=your-secret-key
DEBUG=True
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
- Create an issue on GitHub
- Check the documentation in `/backend/README.md` and `/frontend/README.md`

## ✅ Current Status

- ✅ Project structure created
- ✅ Backend API scaffolded
- ✅ Frontend pages created
- ✅ Docker setup configured
- ⏳ Database integration (TODO)
- ⏳ Scraping implementation (TODO)
- ⏳ Authentication implementation (TODO)
- ⏳ Frontend-backend integration (TODO)
