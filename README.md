# FTU Labs Website

Static website for FTU Labs, hosted on GitHub Pages at [ftulabs.github.io](https://ftulabs.github.io).

## Project Structure

```
ftulabs.github.io/
├── index.html            # Home page
├── blog.html             # Blog listing page
├── projects.html         # Projects page
├── team.html             # Team members page
├── research.html         # Research publications page
├── css/
│   └── style.css         # Global stylesheet (theme colors, layout, components)
├── js/
│   └── main.js           # Navigation toggle & scroll reveal animations
└── blog/
    └── post-template.html  # Example blog post (use as template for new posts)
```

## Adding New Content

This is a static HTML site with no build step. To add content, edit the HTML files directly and commit.

### Add a Blog Post

1. **Create the post file:** Copy `blog/post-template.html` to a new file in the `blog/` folder (e.g. `blog/my-new-post.html`).
2. **Edit the post content:**
   - Update the `<title>` and `<meta name="description">` in `<head>`.
   - Update the `<h1 class="post-title">` with your title.
   - Update the `<div class="post-meta">` with the date, authors, and read time.
   - Write your content inside `<article class="post-content">`. Use standard HTML tags (`<p>`, `<h2>`, `<code>`, `<pre>`, `<blockquote>`, etc.).
3. **Add to the blog listing:** Open `blog.html` and add a new `<div class="blog-item reveal">` entry inside the `<div class="blog-list">` section:
   ```html
   <div class="blog-item reveal">
     <div class="blog-date">YYYY-MM-DD</div>
     <h2 class="blog-title"><a href="blog/my-new-post.html">Post Title</a></h2>
     <p class="blog-excerpt">A short description of the post.</p>
   </div>
   ```
4. **(Optional) Add to homepage:** If this is a featured post, add it to the latest section in `index.html`.

### Add a Team Member

Open `team.html` and add a new `<div class="member reveal">` block inside the `<div class="team-grid">` section:

```html
<div class="member reveal">
  <div class="member-avatar">XX</div>       <!-- Initials (2 chars) -->
  <div class="member-name">Full Name</div>
  <div class="member-role">Role / Title</div>
  <p class="member-bio">Short bio describing expertise and background.</p>
  <div class="member-links">
    <a href="https://github.com/username">GitHub</a>
    <a href="https://twitter.com/username">Twitter</a>
    <a href="https://scholar.google.com/...">Scholar</a>
  </div>
</div>
```

### Add a Project

Open `projects.html` and add a new `<div class="card reveal">` block inside the appropriate `<div class="card-grid cols-2">` section (active or completed):

```html
<div class="card reveal">
  <div class="status mb-1"><span class="status-dot"></span> active</div>
  <h3 class="card-title"><a href="#">Project Name</a></h3>
  <p class="card-desc">Short description of the project.</p>
  <div class="card-meta">
    <span class="tag active">Category</span>
    <span class="tag">Tech</span>
    <span class="tag">Stack</span>
  </div>
</div>
```

### Add a Research Paper

Open `research.html` and add a new `<div class="paper reveal">` block inside the appropriate year's `<div class="research-list">` section. To add a new year, create a new `<div class="research-year">` above a new `<div class="research-list">`:

```html
<div class="paper reveal">
  <h3 class="paper-title"><a href="#">Paper Title</a></h3>
  <p class="paper-authors">Author 1, Author 2, Author 3</p>
  <p class="paper-venue">Conference / Journal Name, Year</p>
  <div class="paper-links">
    <a href="#">[paper]</a>
    <a href="#">[code]</a>
    <a href="#">[arxiv]</a>
  </div>
</div>
```

## Theme

The site uses a dark terminal-style design with **red** as the accent color. All theme colors are defined as CSS custom properties in `css/style.css` under the `:root` selector. To change the accent color, update the `--accent`, `--accent-hover`, `--accent-bg`, and `--accent-border` variables.

## Development

No build tools required. Open any `.html` file in a browser to preview, or use a local server:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```

## Deployment

Push to `main` branch. GitHub Pages will automatically deploy the site.
