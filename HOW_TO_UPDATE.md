# How to Update Your Ananya Construction Website

## 🔄 Complete Update Process (Simple Steps)

### Step 1: Edit Your Files Locally

All your website files are in this folder:
`c:/Users/shreeman/OneDrive/Desktop/sample_gravity/`

**To update ANYTHING on your website, you just need to:**

1. Open the file you want to edit
2. Make your changes
3. Save the file
4. Re-upload to your hosting (Netlify/GitHub/Vercel)

---

## 📸 How to Add/Update Photos

### Adding a New Project Photo:

1. **Put your photo in the images folder**:
   - Go to `c:/Users/shreeman/OneDrive/Desktop/sample_gravity/images/`
   - Copy your new project photo there
   - Name it something simple like `new-project-1.jpg`

2. **Open index.html** (right-click → Open with Notepad or any text editor)

3. **Find the portfolio section** (around line 145-202)

4. **Copy one of the existing portfolio items** and paste it below. For example:
   ```html
   <div class="portfolio-item fade-in" data-category="interior residential">
       <img src="images/new-project-1.jpg" alt="Your Project Name">
       <div class="portfolio-overlay">
           <h3>Your Project Name</h3>
           <p>Description of your project</p>
           <span class="portfolio-category">Interior • Residential</span>
       </div>
   </div>
   ```

5. **Update**:
   - `src="images/new-project-1.jpg"` - your photo filename
   - `data-category="interior residential"` - change to match your project type
   - `<h3>Your Project Name</h3>` - your project title
   - `<p>Description</p>` - brief description
   - `<span>Interior • Residential</span>` - category tags

6. **Save the file** (Ctrl + S)

### Replacing Existing Photos:

**Easy Way**: Just replace the image file
- Keep the same filename (like `project-1.jpg`)
- Replace the old photo with your new one
- No need to edit HTML!

**OR Update the HTML**:
- Find the `<img src="images/old-photo.jpg">` line
- Change to `<img src="images/new-photo.jpg">`

---

## 📞 How to Update Contact Information

### Update Phone Number:

1. **Open index.html**
2. **Find line 254** (or search for "Phone")
3. **Change both places**:
   ```html
   <a href="tel:+919876543210">+91 98765 43210</a>
   ```
   Replace `+919876543210` in `tel:` AND the display number

### Update Email:

1. **Find line 260** (or search for "Email")
2. **Change**:
   ```html
   <a href="mailto:info@elitecivilworks.com">info@elitecivilworks.com</a>
   ```
   Replace with your new email in BOTH places

### Update WhatsApp Number:

1. **Find line 266** (or search for "WhatsApp")
2. **Change**:
   ```html
   <a href="https://wa.me/919876543210" target="_blank">Chat on WhatsApp</a>
   ```
   Replace `919876543210` with your new number (include country code, no + or spaces)

### Update Social Media Links:

1. **Find lines 276-299** (the social links section)
2. **Update each link**:
   ```html
   <a href="https://instagram.com/your-username" target="_blank">
   ```
   Replace `your-username` with your actual profile name

---

## 🌐 How to Upload Changes to Your Live Website

### If Using Netlify (Recommended):

1. **Go to** [netlify.com](https://www.netlify.com)
2. **Login** to your account
3. **Go to your site** (Ananya Construction)
4. **Drag and drop** your entire `sample_gravity` folder into the deploy area
5. **Wait 30 seconds** - Your website is updated!

**That's it!** Your changes are now live.

### If Using GitHub Pages:

1. **Go to** your GitHub repository
2. **Click** "Add file" → "Upload files"
3. **Drag** the files you changed (like `index.html`)
4. **Click** "Commit changes"
5. **Wait 1-2 minutes** - Your website is updated!

### If Using Vercel:

1. **Go to** [vercel.com](https://vercel.com)
2. **Login** and go to your project
3. **Click** "Deployments" → "Redeploy"
4. **OR** if connected to GitHub, just push your changes
5. **Wait 30 seconds** - Your website is updated!

---

## 📝 Quick Reference: What to Edit Where

| What You Want to Change | File to Edit | Where to Find It |
|------------------------|--------------|------------------|
| **Business Name** | index.html | Lines 10, 25, 311, 314 |
| **Phone Number** | index.html | Line 254 |
| **Email Address** | index.html | Line 260 |
| **WhatsApp Number** | index.html | Line 266 |
| **Social Media Links** | index.html | Lines 276-299 |
| **Add New Project Photo** | index.html | Lines 145-202 (portfolio section) |
| **About Us Text** | index.html | Lines 73-83 |
| **Statistics Numbers** | index.html | Lines 86-101 |
| **Colors/Design** | style.css | Lines 8-18 (color variables) |

---

## 💡 Pro Tips

### Tip 1: Keep a Backup
Before making changes, copy your `sample_gravity` folder to a safe place. If something breaks, you can restore it.

### Tip 2: Test Locally First
After editing, open `index.html` in your browser to see if everything looks good BEFORE uploading online.

### Tip 3: Use Simple Names
When adding photos, use simple names without spaces:
- ✅ Good: `project-kitchen-2025.jpg`
- ❌ Bad: `My New Project Photo (1).jpg`

### Tip 4: Compress Photos
Before adding photos, compress them at [tinypng.com](https://tinypng.com) to keep your website fast.

---

## 🆘 Common Issues & Solutions

### Problem: "My changes don't show up online"
**Solution**: 
- Clear your browser cache (Ctrl + Shift + Delete)
- Wait a few minutes for the hosting to update
- Make sure you uploaded the correct file

### Problem: "Image not showing"
**Solution**:
- Check the filename matches exactly (case-sensitive!)
- Make sure the image is in the `images` folder
- Check the file extension (.jpg, .png, etc.)

### Problem: "I forgot my hosting login"
**Solution**:
- Netlify/GitHub/Vercel: Use "Forgot Password" on their login page
- They'll send a reset link to your email

---

## 📞 Need Help?

If you get stuck:
1. Check this guide again
2. Open the file in Notepad and look for the text you want to change
3. Make small changes and test before uploading
4. Keep a backup copy of your working website

**Remember**: You can ALWAYS update your website by:
1. Edit the file on your computer
2. Save it
3. Upload to Netlify/GitHub/Vercel
4. Done!

Your website files will always be in:
`c:/Users/shreeman/OneDrive/Desktop/sample_gravity/`
