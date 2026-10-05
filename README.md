# 🏡 WanderLust

A full-stack travel listing web application inspired by Airbnb, where users can browse, 
create, edit, and review property listings. Built as a major project to demonstrate 
end-to-end web development skills including authentication, image uploads, and database 
management.

## 🚀 Features

- 🔐 User authentication (signup/login/logout) using Passport.js
- 🏠 Create, edit, and delete property listings
- 📸 Image upload and storage via Cloudinary
- ⭐ Leave reviews and ratings on listings
- 💬 Flash messages for user feedback (success/error)
- 🔒 Session-based login persistence with MongoDB session store
- 📱 Responsive UI built with EJS templating

## 🛠️ Tech Stack

**Backend:** Node.js, Express.js  
**Database:** MongoDB, Mongoose  
**Templating:** EJS, EJS-Mate  
**Authentication:** Passport.js, Passport-Local  
**File Storage:** Cloudinary, Multer  
**Session Management:** Express-Session, Connect-Mongo  
**Other:** Method-Override, Connect-Flash, CORS

## 📦 Installation

1. Clone the repository
```bash
   git clone https://github.com/bhavya-dev-ops/WanderLust.git
   cd WanderLust
```

2. Install dependencies
```bash
   npm install --legacy-peer-deps
```

3. Create a `.env` file in the root directory and add:
