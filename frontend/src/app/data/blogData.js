const blogPosts = [
  {
    author: "Aisha Rao",
    title: "Docker Simplified",
    content: "Learn containerization with real-world apps.",
    fullContent: "Docker makes it easier to develop and deploy applications across environments. This article walks through core concepts like containerization, Dockerfiles, volumes, and Compose setups for full-stack projects. You’ll gain practical insights into maintaining clean environments and integrating Docker into dev workflows.",
    image: "img/docker-basics.jpg",
    publishedDate: "2025-07-01"
  },
  {
    author: "Rohan Verma",
    title: "Optimizing SQL Queries",
    content: "Boost performance with indexing strategies.",
    fullContent: "Every SQL query can be improved—and this blog shows how. From understanding execution plans to choosing effective indexes, you'll learn best practices that result in dramatic performance gains. Includes tips for schema planning and when to denormalize intelligently.",
    image: "img/sql-performance.jpg",
    publishedDate: "2025-07-02"
  },
  {
    author: "Kavya Iyer",
    title: "Why React Hooks Changed Everything",
    content: "Dive into useState and useEffect.",
    fullContent: "React Hooks simplify component logic by letting you use state and lifecycle features without writing classes. Learn how `useState`, `useEffect`, and `useContext` allow deeper control and better organization of your code, with real examples from production apps.",
    image: "img/react-hooks.jpg",
    publishedDate: "2025-07-03"
  },
  {
    author: "Meeth Nair",
    title: "Pagination with React & SQL",
    content: "Implement dynamic pagination like a pro.",
    fullContent: "Handling large data sets requires careful paging. This guide shows how to slice data efficiently with SQL `LIMIT` and `OFFSET`, then connect it to React paginators with smooth UX transitions. Bonus: includes dynamic filtering tips to scale with user intent.",
    image: "img/react-pagination.jpg",
    publishedDate: "2025-07-04"
  },
  {
    author: "Sneha Mehta",
    title: "Tailwind with Vite Setup",
    content: "Customize utility-first styling easily.",
    fullContent: "Tailwind CSS supercharges styling with utilities, and Vite makes bundling a breeze. This walkthrough covers setting up both tools, customizing Tailwind configs, and optimizing your build flow for responsive layouts with blazing fast reloads.",
    image: "img/tailwind-vite.jpg",
    publishedDate: "2025-07-04"
  },
  {
    author: "Aryan Patel",
    title: "Blog Slugs for SEO",
    content: "Build cleaner URLs with slug support.",
    fullContent: "SEO loves clean URLs, and slugs are your key to readability and discoverability. Learn how to generate slugs from post titles, use them in route matching, and prevent duplicate slugs with fallback logic. Includes integration tips for dynamic routing in Next.js.",
    image: "img/seo-slugs.jpg",
    publishedDate: "2025-07-05"
  },
  {
    author: "Neha Sharma",
    title: "REST APIs Explained",
    content: "Learn the principles behind clean endpoints.",
    fullContent: "RESTful APIs use predictable URL patterns and structured data exchange to power modern apps. This blog explores HTTP verbs, route design, versioning, and best practices for handling errors and payloads securely and scalably.",
    image: "img/rest-api-guide.jpg",
    publishedDate: "2025-07-05"
  },
  {
    author: "Tanmay Gupta",
    title: "Bootstrap for Fast UI Prototyping",
    content: "Cut your dev time with reusable components.",
    fullContent: "Bootstrap’s grid system and pre-built components save hours during interface prototyping. Learn how to customize styles, implement responsive design patterns, and plug Bootstrap into React for rapid development without sacrificing flexibility.",
    image: "img/bootstrap-ui.jpg",
    publishedDate: "2025-07-06"
  },
  {
    author: "Priya Singh",
    title: "Next.js Routing Deep Dive",
    content: "Explore dynamic routes and SSR strategies.",
    fullContent: "Next.js makes routing intuitive, whether static, dynamic, or server-rendered. This article breaks down nested routes, data fetching options, and fallback strategies for performance. Learn how to create seamless transitions and optimized pages with ease.",
    image: "img/nextjs-routing.jpg",
    publishedDate: "2025-07-07"
  },
  {
    author: "Meeth Nair",
    title: "Containerize Your App with Docker",
    content: "Complete guide for full-stack containers.",
    fullContent: "Learn to encapsulate full-stack apps with Docker—from setting up multi-service containers with Compose to configuring persistent volumes and network layers. We also explore security tips and deployment flows that scale beyond localhost.",
    image: "img/docker-compose-guide.jpg",
    publishedDate: "2025-07-07"
  },
  {
    author: "Vikram Joshi",
    title: "MySQL Shell Tricks",
    content: "Tips for power users and DB tuning.",
    fullContent: "MySQL Shell isn’t just a client—it’s a powerful interface for scripting, querying, and debugging databases. Learn how to switch between JS and SQL modes, use shell commands to analyze performance, and automate admin tasks like backups, user creation, and schema introspection.",
    image: "img/mysql-shell.jpg",
    publishedDate: "2025-07-08"
  },
  {
    author: "Komal Reddy",
    title: "Blog Post Tags Using Multi-select UI",
    content: "Improve UX with intuitive tag selection.",
    fullContent: "Tags help organize content and make filtering easier. This guide shows how to build a multi-select dropdown UI with dynamic styling, validate inputs, and store tag selections in your data model. Includes UX tips for keyboard navigation and mobile support.",
    image: "img/tags-ui.jpg",
    publishedDate: "2025-07-09"
  },
  {
    author: "Anjali Kapoor",
    title: "Debugging Express with Postman",
    content: "Fix APIs faster with proper test cases.",
    fullContent: "Express is quick to set up but tough to debug without a plan. Postman helps visualize requests and responses clearly. Learn how to create collections, test CRUD routes, pass authorization tokens, and write scripts to automate common dev tests.",
    image: "img/express-postman.jpg",
    publishedDate: "2025-07-09"
  },
  {
    author: "Meeth Nair",
    title: "SEO Tips for Developers",
    content: "Simple tricks for better discoverability.",
    fullContent: "Good SEO starts at the code level. Explore best practices like semantic HTML, structured data markup, canonical URLs, and lazy loading. This blog breaks down Google’s latest algorithm preferences and shows you how to make your React or Next.js app SEO-friendly.",
    image: "img/seo-tips.jpg",
    publishedDate: "2025-07-10"
  },
  {
    author: "Abhay Jain",
    title: "Foreign Key Constraints in MySQL",
    content: "Avoid schema issues the smart way.",
    fullContent: "Foreign keys keep relational integrity intact. Discover how to define them, troubleshoot common constraint errors, and set proper cascading rules. This post also covers normalization strategies that protect your database from orphaned rows and update confusion.",
    image: "img/mysql-fk.jpg",
    publishedDate: "2025-07-10"
  },
  {
    author: "Ritu Agarwal",
    title: "GitHub Workflows with Docker",
    content: "Collaborate with efficiency.",
    fullContent: "Combining GitHub Actions with Docker unlocks CI/CD magic. Learn how to build custom workflows that automate testing, building, and pushing images to Docker Hub. Includes secrets management, linting hooks, and best practices for team collaboration.",
    image: "img/github-docker.jpg",
    publishedDate: "2025-07-11"
  },
  {
    author: "Arjun Khanna",
    title: "SQL Joins Made Simple",
    content: "Understand inner, left and outer joins.",
    fullContent: "Joins are essential for combining data across tables. This post breaks down the syntax and logic behind INNER, LEFT, RIGHT, and FULL OUTER joins with intuitive diagrams and real-world queries. Perfect for visual learners who want to master SQL relationships.",
    image: "img/sql-joins.jpg",
    publishedDate: "2025-07-11"
  },
  {
    author: "Meeth Nair",
    title: "React Filtering Strategies",
    content: "Dynamic filtering for better UX.",
    fullContent: "Filtering is more than search—it’s a UX multiplier. Learn how to build performant client-side filtering with debounce logic, multi-select filters, and keyword parsing. Bonus: server-side filtering via query params for scalable data sets.",
    image: "img/react-filtering.jpg",
    publishedDate: "2025-07-12"
  },
  {
    author: "Meera Pillai",
    title: "Debug Vite + Node in Docker",
    content: "Solve environment mismatch issues.",
    fullContent: "Containerizing frontend and backend together isn’t always smooth. This guide covers environment variable resolution, port collisions, file system syncing, and debugging Vite's hot reload inside Docker. Bonus: includes Compose configs for local dev.",
    image: "img/docker-vite-node.jpg",
    publishedDate: "2025-07-13"
  },
  {
    author: "Rahul Sinha",
    title: "Dynamic Blog Forms",
    content: "Create reusable blog forms with React.",
    fullContent: "Building flexible blog forms means thinking in components. Learn how to structure reusable input elements, use form validation libraries like React Hook Form, and dynamically adjust fields for tagging, media uploads, and markdown content blocks.",
    image: "img/blog-forms.jpg",
    publishedDate: "2025-07-13"
  }
];

export default blogPosts;