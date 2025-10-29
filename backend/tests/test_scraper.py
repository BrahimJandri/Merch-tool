"""
Scraper tests
"""
import pytest
from app.services.scraper import ProductScraper


@pytest.mark.asyncio
async def test_scraper_initialization():
    """Test scraper initialization"""
    scraper = ProductScraper(platform="amazon")
    assert scraper.platform == "amazon"


@pytest.mark.asyncio
async def test_scrape_amazon():
    """Test Amazon scraping"""
    scraper = ProductScraper()
    results = await scraper.scrape_amazon("test", limit=10)
    assert isinstance(results, list)


@pytest.mark.asyncio
async def test_scrape_all_platforms():
    """Test scraping all platforms"""
    scraper = ProductScraper()
    results = await scraper.scrape_all("test", limit=10)
    assert "amazon" in results
    assert "etsy" in results
    assert "redbubble" in results
