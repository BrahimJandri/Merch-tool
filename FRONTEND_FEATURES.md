# Merch-tool Frontend Features

## ✅ Completed Features

### 🔐 Authentication System
- **Sign In Page** (`/auth/signin`)
  - Email/password login form
  - Error handling and validation
  - Remember me option
  - Link to sign up and forgot password
  
- **Sign Up Page** (`/auth/signup`)
  - Full registration form
  - Password confirmation
  - Terms and conditions acceptance
  - Email validation
  
- **Forgot Password** (`/auth/forgot-password`)
  - Email submission for password reset
  - Success message display
  - Back to sign in link

- **Authentication Context**
  - Global auth state management
  - JWT token storage in localStorage
  - Auto-login on app load
  - Sign in/sign out functions
  - useAuth hook for components

- **Protected Routes**
  - Wrapper component for authenticated pages
  - Automatic redirect to sign in
  - Loading state while checking auth

### 🏠 Landing Page (`/`)
- Hero section with CTA buttons
- Feature grid (6 features):
  - Multi-Platform Search
  - Keyword Analysis
  - Trend Detection
  - Trademark Verification
  - Automated Scraping
  - Export Data
- Call-to-action section
- Professional marketing design

### 📊 Dashboard (`/dashboard`)
- **Stats Overview** (4 stat cards):
  - Total Searches (with percentage change)
  - Saved Products
  - Active Keywords
  - Trending Items
  
- **Quick Search** - Integrated search bar

- **Charts & Activity**:
  - Search activity chart
  - Recent activity feed with icons
  - Activity types: Search, Save, Keyword Analysis, Trademark Check
  
- **Quick Actions** (4 buttons):
  - New Search
  - Analyze Keywords
  - View Trends
  - Check Trademark

### 🔍 Product Search (`/products`)
- **Advanced Search**:
  - Full-text search input
  - Filter toggle button
  
- **Comprehensive Filters**:
  - Platform selection (multi-select checkboxes)
  - Category dropdown (8 categories)
  - Price range (min/max inputs)
  - Sort options (6 sorting methods)
  - Clear all filters button
  
- **Active Filters Display**:
  - Visual chips for active filters
  - Remove individual filters
  
- **Results**:
  - Product grid (responsive)
  - Loading states
  - Empty state with helpful message
  - Product count display
  
- **Pagination**:
  - Previous/Next buttons
  - Page number buttons
  - Disabled state handling

### 🏷️ Keyword Analysis (`/keywords`)
- **Keyword Input**:
  - Search form with input field
  - Analyze button with loading state
  
- **Main Keyword Metrics** (4 cards):
  - Monthly search volume
  - Competition level (colored badges)
  - Average CPC
  - Trend percentage
  
- **Related Keywords Table**:
  - Comprehensive data table
  - Sortable columns
  - Save individual keywords
  - Color-coded competition
  
- **Insights Section**:
  - Keyword insights (3 points)
  - Recommendations (3 points)
  - Smart analysis based on data
  
- **Empty State**:
  - Helpful placeholder when no analysis

### 📈 Trend Analysis (`/trends`)
- **Filters**:
  - Timeframe selector (5 options)
  - Category buttons (7 categories)
  
- **Trend Chart**:
  - Search volume over time
  - Interactive visualization
  
- **Trending Items Table**:
  - Ranking with medals (🥇🥈🥉)
  - Trend name and category
  - Growth percentage with icons
  - Search volume
  - Platform tags
  - Loading states
  
- **Category Breakdown** (3 cards):
  - Top Categories with progress bars
  - Emerging Trends list
  - Quick Insights with color-coded tips

### 💾 Saved Products (`/saved`)
- **Header**:
  - Product count display
  - Export list button
  
- **Filters**:
  - Category filter buttons with counts
  - Sort dropdown
  
- **Product Grid**:
  - Saved product cards
  - Remove button on each card
  - Empty state with CTA
  
- **Actions**:
  - Delete individual products
  - Export functionality (TODO: API)

### ⚙️ Settings (`/settings`)
- **Tab Navigation** (4 tabs):
  
  1. **Profile Tab**:
     - Full name
     - Email
     - Company
     - Timezone selector
     
  2. **Preferences Tab**:
     - Email notifications toggle
     - Push notifications toggle
     - Weekly report toggle
     - Trend alerts toggle
     - Language selector
     - Theme selector (Light/Dark/Auto)
     
  3. **API Settings Tab**:
     - Automatic scraping toggle
     - Scrape frequency dropdown
     - Max results per query
     - Enable cache toggle
     - Cache expiry hours
     
  4. **Security Tab**:
     - Change password form
     - Two-factor authentication
     - Delete account (danger zone)

- **Save Confirmation**:
  - Success message on save
  - Auto-dismiss after 3 seconds

### 🧭 Navigation Components
- **Header**:
  - Logo/brand
  - Navigation links (Dashboard, Products, Keywords, Trends)
  - User menu with:
    - User avatar/name
    - Saved products link
    - Settings link
    - Sign out button
  - Conditional rendering (auth state)
  - Mobile responsive

- **Footer**:
  - 4-column layout:
    - Product links
    - Company links
    - Resources links
    - Legal links
  - Social media icons
  - Copyright notice
  - Responsive design

## 🎨 Design System

### Color Scheme
- **Primary**: Blue (#2563EB)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Danger**: Red (#EF4444)
- **Purple**: #8B5CF6
- **Orange**: #F97316

### UI Components
- **Cards**: White background, rounded corners, shadow
- **Buttons**: Primary (blue), Secondary (gray), Danger (red)
- **Forms**: Consistent input styling, focus states
- **Tables**: Striped rows, hover effects, responsive
- **Badges**: Color-coded by type/status
- **Loading**: Spinner animations
- **Empty States**: Helpful icons and messages

### Typography
- **Headings**: Bold, clear hierarchy
- **Body**: Gray-700 for readable text
- **Labels**: Gray-500 for secondary text
- **Font**: System fonts (Tailwind defaults)

### Responsiveness
- Mobile-first design
- Breakpoints: sm, md, lg, xl
- Responsive grids (1/2/3/4 columns)
- Mobile navigation menu

## 📱 Page Routes

| Route | Component | Authentication | Description |
|-------|-----------|---------------|-------------|
| `/` | Home | Public | Landing page with features |
| `/auth/signin` | SignIn | Public | User login |
| `/auth/signup` | SignUp | Public | User registration |
| `/auth/forgot-password` | ForgotPassword | Public | Password reset |
| `/dashboard` | Dashboard | Protected | Main dashboard with stats |
| `/products` | Products | Protected | Product search & filters |
| `/keywords` | Keywords | Protected | Keyword analysis tool |
| `/trends` | Trends | Protected | Trend analysis & insights |
| `/saved` | SavedProducts | Protected | Saved products list |
| `/settings` | Settings | Protected | User settings & preferences |

## 🔧 Technical Stack

### Core
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State**: React Hooks + Context API

### Libraries Used
- React 18
- Next.js 14.0.3
- TypeScript 5.9.3
- Tailwind CSS 3.4.1

### API Integration
- Axios for HTTP requests
- API client in `/lib/api.ts`
- Token management in `/lib/auth.ts`
- Base URL: `http://localhost:8000/api/v1`

## 🚀 Future Enhancements

### API Integration (TODO)
- [ ] Connect all forms to backend APIs
- [ ] Real data fetching for dashboard stats
- [ ] Actual product search implementation
- [ ] Keyword analysis API integration
- [ ] Trend data from backend
- [ ] Save/delete functionality

### Features to Add
- [ ] Real-time notifications
- [ ] Advanced data visualization
- [ ] Export to CSV/PDF
- [ ] Bulk operations
- [ ] Favorites/bookmarks
- [ ] Search history
- [ ] User profile image upload
- [ ] Dark mode implementation
- [ ] Mobile app (PWA)

### Performance Optimizations
- [ ] Image optimization
- [ ] Code splitting
- [ ] Lazy loading
- [ ] Caching strategies
- [ ] SEO optimization

## 📝 Development Notes

### File Structure
```
frontend/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── signin/page.tsx
│   │   │   ├── signup/page.tsx
│   │   │   └── forgot-password/page.tsx
│   │   ├── dashboard/page.tsx
│   │   ├── products/page.tsx
│   │   ├── keywords/page.tsx
│   │   ├── trends/page.tsx
│   │   ├── saved/page.tsx
│   │   ├── settings/page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── SearchBar.tsx
│   │   ├── TrendChart.tsx
│   │   ├── ProductCard.tsx
│   │   └── Sidebar.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx
│   └── lib/
│       ├── api.ts
│       └── auth.ts
├── public/
├── package.json
└── tailwind.config.ts
```

### Running the Frontend
```bash
cd frontend
npm install
npm run dev
```

Access at: `http://localhost:3000`

### Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

## 🎯 User Flow

1. **First Visit** → Landing page with features
2. **Sign Up** → Create account
3. **Sign In** → Enter credentials
4. **Dashboard** → View stats and activity
5. **Search Products** → Use filters and search
6. **Analyze Keywords** → Get keyword insights
7. **View Trends** → See trending items
8. **Save Products** → Bookmark favorites
9. **Settings** → Configure preferences
10. **Sign Out** → Logout

## 🔒 Security Features

- JWT token authentication
- Protected route guards
- Token stored in localStorage
- Auto-redirect on unauthorized access
- Secure password handling (bcrypt on backend)
- Form validation on client side

---

**Status**: ✅ Frontend Complete
**Last Updated**: January 2024
**Version**: 1.0.0
