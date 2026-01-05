# Firebase Setup Guide

## 🔥 Setting Up Firebase for Download Tracking

This guide will help you set up Firebase Realtime Database to track downloads for your tools.

---

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click **"Add project"** or select an existing project
3. Enter a project name (e.g., "research-tools-downloads")
4. Follow the setup wizard (you can disable Google Analytics if not needed)
5. Click **"Create project"**

---

## Step 2: Enable Realtime Database

1. In Firebase Console, click **"Realtime Database"** in the left sidebar
2. Click **"Create Database"**
3. Choose a location (e.g., `us-central1`)
4. Select **"Start in test mode"** for now (we'll secure it later)
5. Click **"Enable"**

---

## Step 3: Get Your Database URL

1. In the Realtime Database page, look at the top
2. You'll see a URL like: `https://your-project-id.firebaseio.com`
3. **Copy this URL** - you'll need it for environment variables

---

## Step 4: Create Service Account (For Production)

1. Click the ⚙️ gear icon next to "Project Overview"
2. Click **"Project settings"**
3. Go to the **"Service accounts"** tab
4. Click **"Generate new private key"**
5. Click **"Generate key"** to download the JSON file
6. **Keep this file secure!** Never commit it to Git

---

## Step 5: Set Up Environment Variables

### For Local Development:

Create a `.env.local` file in your project root:

```bash
# .env.local
FIREBASE_DATABASE_URL=https://your-project-id.firebaseio.com
```

### For Production (Vercel):

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Add these variables:

**FIREBASE_DATABASE_URL**
```
https://your-project-id.firebaseio.com
```

**FIREBASE_SERVICE_ACCOUNT** (Important!)
- Open the service account JSON file you downloaded
- Copy the ENTIRE contents
- Paste it as a **single line** (remove all line breaks)
- Example format:
```
{"type":"service_account","project_id":"your-project","private_key_id":"abc123...","private_key":"-----BEGIN PRIVATE KEY-----\nYourKeyHere\n-----END PRIVATE KEY-----\n","client_email":"firebase-adminsdk-xxx@your-project.iam.gserviceaccount.com",...}
```

4. Click **"Save"**
5. Redeploy your project

---

## Step 6: Set Database Rules (Security)

In Firebase Console:
1. Go to **Realtime Database** → **Rules** tab
2. Replace the rules with:

```json
{
  "rules": {
    "downloads": {
      "$toolId": {
        ".read": true,
        ".write": false
      }
    }
  }
}
```

This allows:
- ✅ Anyone can READ download counts
- ❌ Only server (with service account) can WRITE

3. Click **"Publish"**

---

## Step 7: Initialize Download Counters (Optional)

You can manually set initial values in Firebase:

1. In Realtime Database, click the **"+"** next to the database root
2. Add this structure:

```
downloads
  ├─ expert-goggles: 0
  ├─ datavis-decomposer: 0
  └─ autosuggestion-quiz: 0
```

Or let the counters initialize automatically to 0 when first accessed.

---

## Step 8: Test Locally

1. Start your development server:
```bash
npm run dev
```

2. Visit a tool page (e.g., `http://localhost:3000/tools/expert-goggles`)
3. Click the download button
4. Check Firebase Console → Realtime Database to see the counter increment!

---

## 🔧 Troubleshooting

### "Permission denied" errors:
- Make sure your database rules allow reads
- Verify your service account JSON is correctly formatted
- Check that `FIREBASE_DATABASE_URL` is correct

### Counters not incrementing:
- Check browser console for errors
- Verify the service account has proper permissions
- Make sure you're using the correct Firebase project

### Environment variables not working:
- Restart your dev server after adding `.env.local`
- For Vercel, make sure to redeploy after adding environment variables
- Verify there are no trailing spaces in your environment variable values

---

## 📊 Viewing Download Stats

### In Firebase Console:
1. Go to Realtime Database
2. Expand the `downloads` node
3. See all tool download counts in real-time

### Via API:
```bash
# Get download count for a specific tool
curl https://your-site.vercel.app/api/downloads?tool=expert-goggles

# Response:
# {"count":123,"tool":"expert-goggles"}
```

---

## 🔒 Security Best Practices

1. **Never commit** `.env.local` to Git (it's in `.gitignore`)
2. **Never commit** your service account JSON file
3. **Always use** strict database rules in production
4. **Rotate** service account keys periodically
5. **Monitor** usage in Firebase Console

---

## 📈 Firebase Free Tier Limits

Firebase Realtime Database free tier includes:
- **1 GB stored data**
- **10 GB/month downloaded**
- **100 simultaneous connections**

This is more than enough for tracking downloads! Your download counters will use minimal storage (a few KB).

---

## 🚀 You're All Set!

Your download tracking is now powered by Firebase! The counters will:
- ✅ Persist across deployments
- ✅ Update in real-time
- ✅ Work on both local and production
- ✅ Scale automatically

---

## Need Help?

- [Firebase Documentation](https://firebase.google.com/docs/database)
- [Firebase Console](https://console.firebase.google.com)
- [Firebase Support](https://firebase.google.com/support)

Happy tracking! 🎉

