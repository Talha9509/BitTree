# Linktree Clone

A modern, responsive Linktree clone built with [Next.js](https://nextjs.org), featuring user profile creation, custom links, and a sleek UI inspired by Linktree.

## Features

-  **Next.js 13 App Router**  
-  **Responsive design** with Tailwind CSS  
-  **Profile creation**: Add a handle, profile picture, description, and unlimited links  
-  **Frontend validation** for user input  
-  **API routes** for backend integration (see `/api/add`)  
-  **Ready for deployment** on Vercel

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**  
   Visit [http://localhost:3000](http://localhost:3000)

## Project Structure

- `app/` — Main Next.js app directory (pages, API routes)
- `components/` — Reusable React components (e.g., Navbar)
- `public/` — Static assets (e.g., `/generate.png`)
- `styles/` — Global styles (if any)

## Usage

- Go to `/generate` to create your BitTree profile.
- Fill in your handle, add links, upload a profile picture, and write a description.
- Click **Create your BitTree** to save your profile.

## Customization

- Update the logo or styles in `components/Navbar.js`.
- Modify backend logic in `/api/add` as needed.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

Deploy instantly on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

---

**Made with ❤️ using Next.js and Tailwind CSS**