\# 🌟 Aviraha - Where Stillness Becomes Strength



A modern, feature-rich wellness website built with React, Tailwind CSS, and Framer Motion.



\## ✨ Features



\### 🎨 \*\*Design Excellence\*\*

\- \*\*Modern Dark Theme\*\* with gradient overlays

\- \*\*Glassmorphism Effects\*\* for premium feel

\- \*\*Smooth Animations\*\* using Framer Motion

\- \*\*Responsive Design\*\* - Mobile-first approach

\- \*\*Interactive Elements\*\* - Hover effects, transitions

\- \*\*Gradient Text \& Buttons\*\* - Eye-catching CTAs



\### 🚀 \*\*Advanced Components\*\*

1\. \*\*Header\*\* - Fixed navigation with dropdown menus

2\. \*\*Hero\*\* - Full-screen with animated background

3\. \*\*Stats\*\* - Animated counters with live data

4\. \*\*About\*\* - Two-column layout with imagery

5\. \*\*Philosophy\*\* - Nine Pillars showcase

6\. \*\*Services\*\* - Interactive cards with icons

7\. \*\*Team\*\* - Founder profiles with contact info

8\. \*\*Testimonials\*\* - Client reviews with ratings

9\. \*\*Retreats\*\* - Location cards with details

10\. \*\*FAQ\*\* - Accordion-style questions

11\. \*\*CTA\*\* - Multiple call-to-action sections

12\. \*\*Contact\*\* - Form with validation

13\. \*\*Footer\*\* - Newsletter and social links



\### 🎯 \*\*User Experience\*\*

\- Scroll-triggered animations

\- Smooth page transitions

\- Loading states and feedback

\- Accessible navigation (WCAG compliant)

\- SEO optimized structure

\- Fast page loads with optimization



\## 📦 Installation



\### Prerequisites

\- Node.js (v16 or higher)

\- npm or yarn

\- Git



\### Step 1: Clone Repository

```bash

git clone <your-repo-url>

cd aviraha-website

```



\### Step 2: Install Dependencies

```bash

npm install

```



\### Step 3: Environment Setup

Create a `.env` file in the root directory:

```env

REACT\_APP\_BACKEND\_URL=http://localhost:8000

```



\### Step 4: Install Tailwind Plugins

```bash

npm install -D @tailwindcss/forms @tailwindcss/typography @tailwindcss/aspect-ratio

```



\### Step 5: Run Development Server

```bash

npm start

```



Visit `http://localhost:3000` to see your website!



\## 🗂️ Project Structure



```

aviraha-website/

├── public/

│   ├── hero-image.png          # Hero background

│   ├── og-image.png            # Logo image

│   └── images/

│       ├── bharat.jpg          # Founder photo

│       ├── shiv.jpg            # Co-founder photo

│       ├── Rahul.jpeg          # Testimonial

│       ├── Ajay.jpeg           # Testimonial

│       └── Rohin.jpeg          # Testimonial

├── src/

│   ├── components/

│   │   ├── Header.js           # Navigation

│   │   ├── Hero.js             # Landing section

│   │   ├── Stats.js            # Statistics

│   │   ├── About.js            # About section

│   │   ├── Philosophy.js       # Nine Pillars

│   │   ├── Services.js         # Service cards

│   │   ├── Team.js             # Founders

│   │   ├── Testimonials.js     # Reviews

│   │   ├── Retreats.js         # Locations

│   │   ├── FAQ.js              # Questions

│   │   ├── CTA.js              # Call-to-action

│   │   ├── Contact.js          # Contact form

│   │   └── Footer.js           # Footer

│   ├── App.js                  # Main app

│   ├── App.css                 # App styles

│   ├── index.js                # Entry point

│   └── index.css               # Global styles

├── tailwind.config.js          # Tailwind config

├── package.json                # Dependencies

└── README.md                   # This file

```



\## 🎨 Customization



\### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript

colors: {

&nbsp; primary: { /\* Your primary colors \*/ },

&nbsp; gold: { /\* Your accent colors \*/ },

}

```



\### Fonts

Update in `index.css`:

```css

@import url('your-font-url');

```



\### Content

Update text content in each component file in `src/components/`



\### Images

Replace images in `public/` folder with your own images



\## 📸 Image Requirements



\### Recommended Image Sizes:

\- \*\*Hero Background\*\*: 1920x1080px (landscape)

\- \*\*Logo\*\*: 500x500px (transparent PNG)

\- \*\*Team Photos\*\*: 400x400px (square)

\- \*\*Testimonial Photos\*\*: 200x200px (square)

\- \*\*Service Images\*\*: 800x600px (landscape)

\- \*\*Retreat Locations\*\*: 1200x800px (landscape)



\### Image Sources:

1\. \*\*Unsplash\*\* - https://unsplash.com

2\. \*\*Pexels\*\* - https://pexels.com

3\. \*\*Pixabay\*\* - https://pixabay.com



Search terms: "meditation", "yoga", "wellness", "corporate wellness", "sound healing", "retreat"



\## 🚀 Deployment



\### Deploy to Vercel



1\. \*\*Install Vercel CLI\*\*:

```bash

npm install -g vercel

```



2\. \*\*Login to Vercel\*\*:

```bash

vercel login

```



3\. \*\*Deploy\*\*:

```bash

vercel

```



4\. \*\*Production Deploy\*\*:

```bash

vercel --prod

```



\### Deploy to Netlify



1\. \*\*Build the project\*\*:

```bash

npm run build

```



2\. \*\*Drag and drop\*\* the `build` folder to Netlify



Or use \*\*Netlify CLI\*\*:

```bash

npm install -g netlify-cli

netlify deploy --prod --dir=build

```



\### Environment Variables

Add these in your hosting platform:

\- `REACT\_APP\_BACKEND\_URL`: Your backend API URL



\## 🔧 Backend Setup



\### Prerequisites

\- Python 3.8+

\- MongoDB Atlas account



\### Install Backend Dependencies

```bash

pip install -r requirement.txt

```



\### Environment Setup

Create `.env` file:

```env

MONGO\_URL=your\_mongodb\_connection\_string

DB\_NAME=aviraha

```



\### Run Backend Server

```bash

uvicorn server:app --reload --host 0.0.0.0 --port 8000

```



\## 📊 Performance Optimization



\### Implemented Optimizations:

\- ✅ Code splitting with React.lazy()

\- ✅ Image lazy loading

\- ✅ Minified CSS and JS

\- ✅ Gzip compression

\- ✅ Browser caching

\- ✅ Optimized animations

\- ✅ Reduced bundle size



\### Lighthouse Scores Target:

\- Performance: 90+

\- Accessibility: 95+

\- Best Practices: 100

\- SEO: 100



\## 🎯 Future Enhancements



\### Phase 2 Features:

\- \[ ] Blog section with CMS

\- \[ ] Online booking system

\- \[ ] Payment gateway integration

\- \[ ] Client dashboard

\- \[ ] Live chat support

\- \[ ] Multi-language support

\- \[ ] Dark/Light mode toggle

\- \[ ] Video backgrounds

\- \[ ] 3D animations

\- \[ ] PWA capabilities



\### Phase 3 Features:

\- \[ ] Mobile app (React Native)

\- \[ ] AI chatbot

\- \[ ] Virtual retreat tours (360°)

\- \[ ] Wellness assessment quiz

\- \[ ] Community forum

\- \[ ] Event calendar

\- \[ ] Member portal

\- \[ ] E-commerce for products



\## 📝 License



Copyright © 2025 Vinyasa Dynamics Private Limited. All rights reserved.



\## 🤝 Support



For support, email: connect@aviraha.in



\## 👥 Team



\- \*\*Bharat Chandak\*\* (Rithvik Maheshwari) - Founder

\- \*\*Dr. Shiv Shankar Nautiyal\*\* - Co-Founder



\## 🙏 Acknowledgments



\- Design inspiration from modern wellness brands

\- Unsplash for placeholder images

\- Framer Motion for animations

\- Tailwind CSS for styling

\- Lucide React for icons



---



\*\*Made with ❤️ for conscious transformation\*\*

