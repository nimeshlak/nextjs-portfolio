This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# portfolio



Great! If you're looking to **update your code and website** (perhaps a Next.js app or any other web project), I'll guide you through the process step-by-step, from updating your code locally to deploying it to your server.

### Steps to Update Code & Website

#### 1. **Update the Code Locally**

First, you need to make sure the changes are made in your local environment or development environment.

1. **Pull Latest Changes** (if you're using Git):
   
   If you're working on a Git-based project and collaborating with a team or repository, you'll want to pull any recent changes from the remote repository:
   
   ```bash
   git pull origin main  # or whatever branch you're using
   ```

2. **Make Your Code Changes**:
   
   Open your project in your preferred code editor (VSCode, Sublime, etc.), and make any updates or additions to your website's files.

   For a **Next.js** app, this could include:
   - **Adding new pages**: `pages/about.js`, `pages/contact.js`, etc.
   - **Updating components**: Modify or add new React components.
   - **Updating styles**: Modify or add new CSS/SCSS files, or use styled-components.
   - **Fixing bugs or features**: Refactor or implement new features based on your goals.

3. **Test Locally**:
   
   After making changes, run your project locally to test that everything works as expected:
   
   ```bash
   npm run dev  # For Next.js apps
   ```
   
   This should start the app in development mode. Visit `http://localhost:3000` in your browser to see the changes live.

#### 2. **Commit and Push Changes to Git (If Applicable)**

Once you've confirmed that your code works correctly, it's time to commit the changes and push them to your remote repository (like GitHub, GitLab, or Bitbucket).

1. **Stage Changes**:
   
   ```bash
   git add .  # Adds all changes to the staging area
   ```

2. **Commit Changes**:
   
   Write a clear commit message to explain what has changed:
   
   ```bash
   git commit -m "Updated home page styles and added new features"
   ```

3. **Push to Remote Repository**:
   
   Push your local changes to the remote repository:
   
   ```bash
   git push origin main  # or whatever branch you're using
   ```

#### 3. **Deploy the Updated Code to Your Server**

Now that your code is updated in the repository, it's time to deploy it to your production server. Since you've already set up Nginx and your VPS, we'll assume you're deploying to that server.

##### **Deploying to a VPS** (assuming you're using Next.js):

1. **SSH into Your Server**:

   Log into your VPS using SSH:

   ```bash
   ssh root@your-vps-ip
   ```

2. **Navigate to Your Project Folder**:

   Change to the directory where your project is hosted (e.g., `/var/www/nextjs-app`):

   ```bash
   cd /var/www/nextjs-app
   ```

3. **Pull Latest Changes**:

   If your server is connected to a Git repository, you can pull the latest changes from the remote repository:

   ```bash
   git pull origin main  # or the appropriate branch
   ```

4. **Install New Dependencies** (if necessary):

   If you've added any new dependencies to the project (e.g., new packages), run:

   ```bash
   npm install --production  # Installs only production dependencies
   ```

   If you're using the development version, just run:

   ```bash
   npm install
   ```

5. **Build the Next.js App**:

   After pulling the latest changes, rebuild your Next.js app so the changes are applied:

   ```bash
   npm run build
   ```

6. **Restart the Application** (if using a process manager like `pm2`):

   If you're using a process manager like **pm2** to run your app in production, restart it to apply the updates:

   ```bash
   pm2 restart nextjs-app  # Replace with the name of your app if it's different
   ```

   If you’re using **Docker**, you’d rebuild the Docker image and restart the container:

   ```bash
   docker-compose down
   docker-compose up --build -d
   ```

   If you're just running the app manually:

   ```bash
   npm start  # Or the command you use to run in production
   ```

7. **Check Nginx** (if applicable):

   If you've made changes to your Nginx configuration (e.g., server names, proxy settings), you’ll want to restart Nginx to apply the changes:

   ```bash
   sudo systemctl restart nginx
   ```

---

#### 4. **Verify the Changes on the Website**

Once your application is restarted, go to your website's URL (`http://yourdomain.com`) and check if the updates appear live.

- **Clear Cache**: If changes are not showing up, try clearing your browser cache or use an incognito window to bypass the cached files.
- **Check the Logs**: If you encounter issues, you can check the Nginx or application logs for any errors:
  
  - **Nginx logs**:
    ```bash
    sudo tail -f /var/log/nginx/error.log
    ```
  
  - **Next.js app logs**:
    If you are using `pm2` to manage your app, you can check the logs with:
    ```bash
    pm2 logs nextjs-app
    ```

---

### 5. **Optional: Update the DNS (If Applicable)**

If you made changes that affect your domain setup (like changing subdomains, IP addresses, or SSL configurations), you'll need to update the DNS settings on **Namecheap** or wherever your domain is hosted.

For instance:
- Change A records to point to the correct IP address.
- Set up or renew SSL certificates using Let's Encrypt, etc.

### Final Thoughts

Once everything is deployed and live, don't forget to **monitor** your site to ensure it’s running smoothly and there are no issues after the updates. You can use monitoring tools like **UptimeRobot** or **New Relic** for continuous tracking.

Let me know if you need help with any of these steps or run into any issues during the update!
