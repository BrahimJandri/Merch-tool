# Merch-tool Backend

FastAPI backend for the Merch-tool merchandise research application.

## Setup

### Quick Start

```bash
# Make setup script executable
chmod +x setup.sh

# Run setup
./setup.sh

# Start development server
source venv/bin/activate
uvicorn app.main:app --reload
```

### Manual Setup

```bash
# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate

# Install dependencies
pip install -r app/requirements.txt

# Install Playwright browsers
playwright install chromium

# Copy environment file
cp .env.example .env

# Edit .env with your configuration
nano .env
```

## Running the Server

```bash
# Development mode with auto-reload
uvicorn app.main:app --reload

# Production mode
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

The API will be available at:
- API: http://localhost:8000
- Interactive docs: http://localhost:8000/docs
- Alternative docs: http://localhost:8000/redoc

## API Endpoints

### Products
- `GET /api/products/search` - Search for products
- `GET /api/products/trend` - Get trending products
- `GET /api/products/{product_id}` - Get product details

### Keywords
- `GET /api/keywords/analyze` - Analyze keyword potential
- `GET /api/keywords/suggestions` - Get keyword suggestions

### Trademarks
- `GET /api/trademarks/check` - Check if phrase is trademarked
- `POST /api/trademarks/batch-check` - Batch check multiple phrases

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/token` - Login and get token
- `GET /api/auth/me` - Get current user info

## Project Structure

```
backend/
├── app/
│   ├── main.py              # FastAPI entry point
│   ├── api/
│   │   └── routes/          # API route handlers
│   ├── db/                  # Database models and connections
│   ├── services/            # Business logic
│   ├── utils/               # Utilities and helpers
│   └── requirements.txt     # Python dependencies
├── tests/                   # Unit tests
├── .env.example             # Environment variables template
└── setup.sh                 # Setup script
```

## Testing

```bash
# Run all tests
pytest

# Run with coverage
pytest --cov=app

# Run specific test file
pytest tests/test_api.py
```

## Environment Variables

See `.env.example` for required environment variables:

- `DATABASE_URL` - PostgreSQL connection string
- `REDIS_HOST` - Redis server host
- `REDIS_PORT` - Redis server port
- `ELASTICSEARCH_URL` - Elasticsearch URL
- `SECRET_KEY` - JWT secret key
- `DEBUG` - Debug mode (True/False)

## Development

### Database Migrations

```bash
# Create migration
alembic revision --autogenerate -m "description"

# Apply migrations
alembic upgrade head

# Rollback migration
alembic downgrade -1
```

### Code Quality

```bash
# Format code
black app/

# Lint code
flake8 app/

# Type checking
mypy app/
```
