# Firebase Quick Start

## ✅ What's Been Done

Firebase has been integrated into your project to track download numbers!

### Files Modified:
1. ✅ **Installed Firebase packages** (`firebase`, `firebase-admin`)
2. ✅ **Created** `lib/firebase.ts` - Firebase configuration
3. ✅ **Updated** `app/api/downloads/route.ts` - Now uses Firebase instead of Vercel KV
4. ✅ **Removed** `@vercel/kv` package (no longer needed)

---

## 🚀 Quick Setup (5 Minutes)

### 1. Create Firebase Project
- Go to: https://console.firebase.google.com
- Click "Add project"
- Name it: "research-tools-downloads"

### 2. Enable Realtime Database
- Click "Realtime Database" in sidebar
- Click "Create Database"
- Choose location: `us-central1`
- Start in "Test mode"

### 3. Get Database URL
- Copy the URL shown (looks like: `https://your-project-id.firebaseio.com`)

### 4. Add Environment Variable

**For Local Development:**
Create `.env.local` in project root:
```bash
FIREBASE_DATABASE_URL=https://your-project-id.firebaseio.com
```

**For Vercel Production:**
1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add: `FIREBASE_DATABASE_URL` = `https://your-project-id.firebaseio.com`
3. Add: `FIREBASE_SERVICE_ACCOUNT` = (service account JSON as single line)

### 5. Test It!
```bash
npm run dev
```
Visit http://localhost:3000/tools/expert-goggles and click download!

---

## 📖 Full Instructions

See **[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)** for:
- Detailed setup instructions
- Security configuration
- Service account setup
- Database rules
- Troubleshooting tips

---

## 🔄 Migration from Vercel KV

Your download counters will start fresh at 0. If you need to preserve existing counts:

1. Note current counts from your site
2. Set them manually in Firebase Console:
   - Go to Realtime Database
   - Click "+" to add data
   - Create structure:
     ```
     downloads
       expert-goggles: [your-count]
       datavis-decomposer: [your-count]
       autosuggestion-quiz: [your-count]
     ```

---

## 🎯 Benefits of Firebase

✅ **Free tier** - 1GB storage, 10GB/month transfer  
✅ **Real-time updates** - See counts update instantly  
✅ **No cold starts** - Always ready, no Vercel KV delays  
✅ **Persistent** - Data survives across all deployments  
✅ **Scalable** - Handles millions of requests  
✅ **Dashboard** - View stats in Firebase Console  

---

## 🔍 Viewing Download Stats

### In Firebase Console:
```
Realtime Database → Data tab
downloads
  ├─ expert-goggles: 42
  ├─ datavis-decomposer: 28
  └─ autosuggestion-quiz: 15
```

### Via API:
```bash
curl https://your-site.com/api/downloads?tool=expert-goggles
```

---

## ⚠️ Important Notes

1. **Don't commit** `.env.local` to Git (already in `.gitignore`)
2. **Set database rules** to secure your data (see FIREBASE_SETUP.md)
3. **Generate service account** for production deployment
4. **Restart dev server** after adding `.env.local`

---

## 🆘 Troubleshooting

**Downloads not working?**
- Check Firebase Console → Realtime Database is enabled
- Verify `FIREBASE_DATABASE_URL` is correct in `.env.local`
- Restart your dev server

**Permission denied errors?**
- Database rules might be too restrictive
- Start in "test mode" for initial setup
- See FIREBASE_SETUP.md for correct rules

**Environment variables not loading?**
- Make sure `.env.local` is in project root
- Restart dev server: `npm run dev`
- Check there are no typos in variable names

---

## 🎉 You're Ready!

Your download tracking is now powered by Firebase. All set! 🚀

For detailed instructions, see: **[FIREBASE_SETUP.md](./FIREBASE_SETUP.md)**

