<h1>merch-tool/</h1>
<li>
├── backend/
│   ├── app/
│   │   ├── main.py                 # FastAPI entry point
│   │   ├── api/
│   │   │   ├── routes/
│   │   │   │   ├── products.py     # /search, /trend endpoints
│   │   │   │   ├── keywords.py
│   │   │   │   ├── trademarks.py
│   │   │   │   ├── auth.py
│   │   │   └── __init__.py
│   │   ├── db/
│   │   │   ├── models.py           # SQLAlchemy models
│   │   │   ├── database.py
│   │   │   ├── elastic.py
│   │   │   └── redis_cache.py
│   │   ├── services/
│   │   │   ├── scraper.py          # Scrapy/Playwright logic
│   │   │   ├── keyword_engine.py
│   │   │   ├── trend_detector.py
│   │   │   └── trademark_checker.py
│   │   ├── utils/
│   │   │   ├── config.py
│   │   │   ├── logger.py
│   │   │   └── schedulers.py       # Cron jobs
│   │   └── requirements.txt
│   └── tests/
│       ├── test_api.py
│       ├── test_scraper.py
│       └── test_trends.py
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── index.tsx
│   │   │   ├── dashboard.tsx
│   │   │   ├── keywords.tsx
│   │   │   └── trends.tsx
│   │   ├── components/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── TrendChart.tsx
│   │   │   ├── ProductCard.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── lib/
│   │   │   ├── api.ts              # Fetch from FastAPI
│   │   │   └── auth.ts
│   │   ├── styles/
│   │   │   └── globals.css
│   │   └── utils/
│   │       └── helpers.ts
│   ├── public/
│   │   └── logo.svg
│   └── package.json
│
├── infra/
│   ├── docker-compose.yml          # Dev setup for API + DB + Elastic
│   ├── Dockerfile.backend
│   ├── Dockerfile.frontend
│   ├── nginx.conf
│   └── deploy/
│       ├── vercel.json
│       ├── aws.yml
│       └── cron.yaml
│
└── README.md
</li>
