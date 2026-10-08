# Sandhiya R - Professional Personal Portfolio Website

A clean, modern, and fully responsive personal portfolio website designed for **Sandhiya R**, presented as a fresher / entry-level Computer Science & Engineering graduate.

All information within this website is strictly extracted from the provided resume with zero invented claims, ensuring 100% authenticity for recruiters, LinkedIn connections, and job applications.

---

## 📁 Project Structure

```
sandhiya-portfolio/
│
├── index.html                   # Semantic HTML5 single-page structure
├── css/
│   └── style.css                # Responsive CSS3 styles with Light & Dark themes
├── js/
│   └── main.js                  # Vanilla JavaScript (navigation, theme, project filter, contact form)
├── assets/
│   └── Sandhiya_R_Resume.pdf    # Authentic resume PDF file for direct downloading
└── README.md                    # Documentation & deployment guide
```

---

## ✨ Features Included

1. **Fresher / Entry-Level Presentation:**
   - Clearly positioned as a **Class of 2026 B.E. Computer Science and Engineering** student from Jaishriram Engineering College, Tirupur.
   - Genuine career objective highlighting hands-on fluency in AI tools (ChatGPT, Gemini, Claude), prompt engineering, and web development.

2. **Sections Based Directly on the Resume:**
   - **Home (Hero):** Professional introduction, status badge (*Fresher • Entry-Level Candidate • Available for Hire*), quick contact info, and direct Resume download button.
   - **About Me:** Educational progression, objective, and core strengths.
   - **Skills:** Categorized into AI Tools, Prompt Engineering, Practical AI Applications, Technical/Development (HTML, CSS, JS, React JS, SQL, Java), and Office Tools (MS Word, MS Excel).
   - **Internships & Experience:** Sparkout Tech Solutions (Web Development Intern), La Confianza Technologies (Business Development Intern), Arrow Thought (Process Associate), and InPlant Trainings (BrainerySpot, NXTLogics, Nitroware).
   - **Projects:** Interactive filterable showcase for *Chickpea Disease Detection (Hybrid Deep Learning)*, *Bus Ticket Reservation System*, and *Distance Measurement System (Arduino & Ultrasonic)*.
   - **Education:** B.E. Computer Science and Engineering (Jaishriram Engineering College, May 2026), and HSC/SSLC (Gandhi Vidhyalaya Matriculation School).
   - **Certifications & Workshops:** Diploma in Computer Applications (DCA), Cyber Security & 5G Technology (Kongu Engineering College), React.js and Web Development (Altalya Solutions).
   - **Declaration:** Authentic resume declaration included.
   - **Contact:** Email, phone, location, LinkedIn, GitHub, quick copy-to-clipboard buttons, resume download card, and recruiter contact form.

3. **User Experience & Polish:**
   - 🌓 **Dark & Light Mode Toggle:** Recruiter-friendly theme switcher saved across sessions via `localStorage`.
   - 📱 **Fully Responsive:** Perfectly optimized for smartphones, tablets, laptops, and wide desktop displays.
   - ⚡ **Pure Vanilla Stack:** Fast load times, zero external heavy dependencies or bloated frameworks.
   - 📥 **Authentic Resume Download:** Direct download button connected to `assets/Sandhiya_R_Resume.pdf`.

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Open
Double-click `index.html` or right-click and choose **Open with > Chrome / Edge / Firefox**.

### Option 2: Using Python (Local Web Server)
In PowerShell or Terminal, navigate to the folder:
```powershell
cd "C:\Users\hp\.gemini\antigravity\scratch\sandhiya-portfolio"
python -m http.server 8000
```
Then visit: `http://localhost:8000`

---

## 🌐 Free Online Deployment Guide

### Option A: GitHub Pages (Recommended)
1. Initialize git in the folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
2. Create a new repository on [GitHub](https://github.com) named `sandhiya-portfolio` or `sandhiya.github.io`.
3. Push your code:
   ```bash
   git remote add origin https://github.com/sandhiya-manikam-2005/sandhiya-portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to **Settings > Pages** -> Under **Branch**, select `main` and `/ (root)` -> Click **Save**.
5. Your portfolio will be live at `https://sandhiya-manikam-2005.github.io/sandhiya-portfolio/`!

### Option B: Netlify (Drag-and-Drop)
1. Go to [Netlify Drop](https://app.netlify.com/drop).
2. Drag and drop the `sandhiya-portfolio` folder into the browser.
3. Your website will be deployed in 5 seconds with an instant live URL.

### Option C: Vercel
1. Install Vercel CLI or connect your GitHub repository to [Vercel](https://vercel.com).
2. Import the project and click **Deploy**.
