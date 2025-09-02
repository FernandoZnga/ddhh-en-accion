# DDHH en Acción - Human Rights NGO Website

A responsive bilingual website for a human rights non-governmental organization focused on defending the rights of incarcerated individuals and their families.

## 🌟 Features

- **Bilingual Support**: Automatic language detection (Spanish/English) with manual toggle
- **Responsive Design**: Mobile-first design using Bootstrap 5
- **Blog System**: Articles organized by months with filtering functionality
- **Contact Form**: Interactive contact form with validation
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **GitHub Pages Ready**: Configured for easy deployment

## 🚀 Live Demo

Visit the website: [https://fernandoznga.github.io/ddhh_project](https://fernandoznga.github.io/ddhh_project)

## 📋 About the Organization

**DDHH en Acción** (Human Rights in Action) is a non-governmental organization dedicated to:

### Vision
To be a leading organization in defending the human rights of incarcerated individuals, building a more just, inclusive, and discrimination-free society where every person has access to dignified living conditions and social reintegration opportunities.

### Mission
To defend and promote the human rights of incarcerated individuals and their families through accompaniment actions, social awareness, political advocacy, and building community support networks, working tirelessly for social inclusion and the eradication of all forms of discrimination.

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Bootstrap 5.3.2
- **Icons**: Font Awesome 6.0.0
- **Language Detection**: Browser API
- **Deployment**: GitHub Pages

## 📁 Project Structure

```
ddhh_project/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Custom CSS styles
├── js/
│   └── script.js      # JavaScript functionality
├── README.md          # Project documentation
└── .gitignore        # Git ignore file
```

## 🚀 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository** on GitHub
   - Go to [GitHub](https://github.com) and click "New repository"
   - Name it `ddhh_project` (or your preferred name)
   - Make it public
   - Don't initialize with README (we already have one)

2. **Push your code**:
   ```bash
   git add .
   git commit -m "Initial commit: Human Rights NGO website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/ddhh_project.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

### Method 2: Using GitHub CLI (if you have it installed)

```bash
# Create and push to GitHub
gh repo create ddhh_project --public --source=. --remote=origin --push

# Enable Pages
gh api repos/:owner/ddhh_project/pages --method POST --field source.branch=main --field source.path=/
```

## 🌍 Language Support

The website supports both Spanish and English:

- **Auto-detection**: Detects browser language on first visit
- **Manual toggle**: Click the language button in the navigation
- **Persistent**: Remembers your language choice using localStorage

## 📱 Mobile Optimization

- Responsive breakpoints for all screen sizes
- Touch-friendly navigation and buttons
- Optimized images and loading
- Progressive enhancement approach

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast mode support
- Screen reader friendly
- Focus indicators

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy theming:

```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    /* ... */
}
```

### Adding Articles
Articles are managed in `js/script.js`. Add new articles to the `articles` object:

```javascript
const articles = {
    'marzo-2024': [
        {
            id: 10,
            title: {
                es: "Nuevo Título",
                en: "New Title"
            },
            // ... more properties
        }
    ]
};
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Contact

For questions about this project or the organization:

- **Email**: contacto@ddhhenaccion.org
- **Address**: Calle Principal 123, Ciudad, País
- **Phone**: +1 (555) 123-4567

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Bootstrap team for the excellent CSS framework
- Font Awesome for the beautiful icons
- GitHub for providing free hosting via GitHub Pages
- All human rights defenders working to make the world more just

---

**Made with ❤️ for human rights and social justice**
