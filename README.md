# GitHub User Search Interface

A beautiful, minimalist React application for searching GitHub users and exploring their top repositories. Built with modern web technologies and featuring a clean black-and-white design with dark/light theme support.

## 🚀 Features

- **Real-time User Search**: Search GitHub users with debounced input (500ms delay)
- **Comprehensive User Profiles**: Display avatar, name, bio, location, and follower count
- **Top Repositories**: Show user's top 5 repositories sorted by star count
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Loading States**: Elegant loading indicators and error handling
- **Clean UI**: Monochromatic design with subtle animations

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API**: GitHub REST API
- **State Management**: React Hooks

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd github-user-search
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── SearchForm.tsx      # Search input with debouncing
│   ├── UserProfile.tsx     # User profile display
│   ├── RepoCard.tsx        # Repository card component
│   ├── ErrorMessage.tsx    # Error state component
│   └── ThemeToggle.tsx     # Dark/light theme toggle
├── hooks/
│   ├── useTheme.ts         # Theme management hook
│   └── useDebounce.ts      # Debounce utility hook
├── services/
│   └── githubApi.ts        # GitHub API integration
├── types/
│   └── github.ts           # TypeScript interfaces
├── App.tsx                 # Main application component
├── main.tsx               # Application entry point
└── index.css              # Global styles and Tailwind imports
```

## 🎨 Design Philosophy

The application follows a minimalist design approach with:

- **Monochromatic Color Scheme**: Pure black and white with subtle grays
- **Clean Typography**: Modern sans-serif fonts for excellent readability
- **Subtle Animations**: Smooth transitions and micro-interactions
- **Responsive Layout**: Mobile-first design with CSS Grid and Flexbox
- **Accessible UI**: High contrast ratios and semantic HTML

## 🌟 Key Features

### Search Functionality
- Debounced search input prevents excessive API calls
- Real-time results as you type
- Handles empty states and invalid usernames

### User Profile Display
- Large avatar with rounded corners
- Name, username, and bio information
- Location, follower count, and repository statistics
- Direct link to GitHub profile

### Repository Cards
- Top 5 repositories sorted by star count
- Repository name, description, and language
- Star and fork counts
- Direct links to repositories

### Theme System
- Persistent theme preference stored in localStorage
- Respects system dark mode preference
- Smooth transitions between themes
- Toggle button with appropriate icons

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layout)
- **Tablet**: 768px - 1024px (2-column repository grid)
- **Desktop**: > 1024px (3-column repository grid)

## 🚀 Deployment

The application is optimized for static hosting platforms:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any static hosting provider

## 🌐 API Usage

The application uses the GitHub REST API v3:

- **User Data**: `GET https://api.github.com/users/{username}`
- **Repositories**: `GET https://api.github.com/users/{username}/repos`

Note: The GitHub API has rate limits for unauthenticated requests (60 requests per hour per IP address).

## 🎯 Future Enhancements

- [ ] Repository pagination for users with many repos
- [ ] Advanced search filters (language, stars, etc.)
- [ ] User repository contribution graph
- [ ] GitHub organization search
- [ ] Export user data functionality
- [ ] Keyboard shortcuts for power users

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS