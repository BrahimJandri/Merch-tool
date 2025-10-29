"""
Trend detection tests
"""
import pytest
from app.services.trend_detector import TrendDetector


def test_trend_detector_initialization():
    """Test trend detector initialization"""
    detector = TrendDetector()
    assert detector is not None


def test_detect_trending_products():
    """Test trending product detection"""
    detector = TrendDetector()
    results = detector.detect_trending_products(days=7)
    assert isinstance(results, list)


def test_analyze_seasonality():
    """Test seasonality analysis"""
    detector = TrendDetector()
    result = detector.analyze_seasonality("christmas")
    assert "keyword" in result
    assert "is_seasonal" in result


def test_get_emerging_niches():
    """Test emerging niche detection"""
    detector = TrendDetector()
    results = detector.get_emerging_niches(limit=5)
    assert isinstance(results, list)
