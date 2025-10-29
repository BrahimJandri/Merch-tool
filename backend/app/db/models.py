"""
SQLAlchemy models for the database
"""
from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean, Text, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base = declarative_base()


class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, index=True, nullable=False)
    email = Column(String(100), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    is_active = Column(Boolean, default=True)


class Product(Base):
    __tablename__ = "products"
    
    id = Column(Integer, primary_key=True, index=True)
    platform = Column(String(50), index=True)  # Amazon, Etsy, etc.
    product_id = Column(String(100), index=True)
    title = Column(String(500))
    description = Column(Text)
    price = Column(Float)
    category = Column(String(100), index=True)
    url = Column(String(500))
    image_url = Column(String(500))
    sales_rank = Column(Integer)
    rating = Column(Float)
    review_count = Column(Integer)
    scraped_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)


class Keyword(Base):
    __tablename__ = "keywords"
    
    id = Column(Integer, primary_key=True, index=True)
    keyword = Column(String(200), unique=True, index=True, nullable=False)
    search_volume = Column(Integer)
    competition_score = Column(Float)
    trend_score = Column(Float)
    last_analyzed = Column(DateTime, default=datetime.utcnow)


class Trademark(Base):
    __tablename__ = "trademarks"
    
    id = Column(Integer, primary_key=True, index=True)
    phrase = Column(String(200), index=True, nullable=False)
    region = Column(String(10), default="US")
    is_trademarked = Column(Boolean, default=False)
    registration_number = Column(String(50))
    owner = Column(String(200))
    checked_at = Column(DateTime, default=datetime.utcnow)
