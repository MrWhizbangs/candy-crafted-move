# Render.com Deployment Fixes

## Issues Fixed
1. **Google Maps API RefererNotAllowedMapError** - API key needs HTTP referrer restrictions
2. **Location gallery images returning 404** - Fixed by using ES6 imports
3. **Infinite redirect loop on page refresh** - Fixed by removing GitHub Pages redirect scripts

---

## Issue 1: Google Maps API Configuration

### Problem
You're seeing `RefererNotAllowedMapError` because the Google Maps API key in [index.html](index.html) lacks proper HTTP referrer restrictions.

## Solution: Configure API Key Restrictions in Google Cloud Console

### Step 1: Access Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (the one containing the API key: `AIzaSyCNvA3qHFfHMFbYX7Non9MkBLeA4k-DM4s`)
3. Navigate to: **APIs & Services** → **Credentials**
4. Find your API key in the list and click on it to edit

### Step 2: Set Application Restrictions

In the API key settings:

1. Under **Application restrictions**, select: **HTTP referrers (web sites)**

2. Under **Website restrictions**, add these referrer patterns:

```
https://www.whizbangscandy.com/*
http://www.whizbangscandy.com/*
https://whizbangscandy.com/*
http://whizbangscandy.com/*
http://localhost:8080/*
http://localhost:*/*
```

The wildcards (`*`) allow all paths under each domain.

### Step 3: Set API Restrictions

Under **API restrictions**:

1. Select: **Restrict key**
2. Choose: **Maps JavaScript API**
3. Optionally also select: **Maps Embed API** (if you plan to use embedded maps)

### Step 4: Save Changes

1. Click **Save** at the bottom
2. Wait 5-10 minutes for changes to propagate through Google's servers

### Step 5: Test

1. Visit: `https://www.whizbangscandy.com/locations/miami`
2. Open browser DevTools (F12) → Console tab
3. Verify there are NO `RefererNotAllowedMapError` messages
4. Confirm the map loads and displays correctly

## Security Notes

**Why this is safe for frontend exposure:**
- Google Maps JavaScript API is designed for client-side use
- HTTP referrer restrictions prevent unauthorized domains from using your key
- API restrictions limit key usage to only Maps APIs
- You can monitor usage in Google Cloud Console billing section

**Recommended additional security:**
- Set up billing alerts in Google Cloud Console
- Monitor API usage regularly
- Consider implementing rate limiting if you see abuse

## Troubleshooting

**If the error persists after 10 minutes:**
1. Double-check the referrer patterns in Google Cloud Console
2. Clear your browser cache
3. Verify the domain matches exactly (with/without `www.`)
4. Check Google Cloud Console for any billing or quota issues

**Common issues:**
- Forgot to include both `www.` and non-`www.` versions
- Forgot to include `http://` AND `https://`
- Didn't wait long enough for changes to propagate (can take up to 10 minutes)
- API key has quota limits or billing disabled

## Alternative: Move API Key to Environment Variable (Optional)

If you prefer to add an extra layer of security, you can move the API key to an environment variable:

### 1. Update .env.production

Add to [.env.production](.env.production):
```
VITE_GOOGLE_MAPS_API_KEY=AIzaSyCNvA3qHFfHMFbYX7Non9MkBLeA4k-DM4s
```

### 2. Update index.html

Replace the current script tag in [index.html:45](index.html#L45) with:
```html
<script type="module">
  const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}&callback=console.debug&libraries=maps,marker&v=beta`;
  script.async = true;
  document.head.appendChild(script);
</script>
```

### 3. Update Render Environment Variables

In your Render.com dashboard:
1. Go to your static site
2. Navigate to **Environment** section
3. Add: `VITE_GOOGLE_MAPS_API_KEY` with value: `AIzaSyCNvA3qHFfHMFbYX7Non9MkBLeA4k-DM4s`

**Note:** This approach is more complex and not strictly necessary for Maps API. The referrer restrictions are usually sufficient for client-side API keys.

---

## Issue 2: Location Gallery Images (FIXED ✓)

### Problem
Images were using hardcoded paths like `/candy-crafted-move/src/assets/miami-4.jpg` which Vite's bundler doesn't process.

### Solution Applied
Created image import modules that use ES6 imports:
- [src/data/images/miami.ts](src/data/images/miami.ts)
- [src/data/images/burlington.ts](src/data/images/burlington.ts)

Updated [src/data/locations.ts](src/data/locations.ts) to import these modules instead of using hardcoded strings.

**Status:** Fixed and verified in build. Images are now properly bundled with content hashing.

---

## Issue 3: Infinite Redirect Loop on Page Refresh (FIXED ✓)

### Problem
The GitHub Pages redirect scripts were still active, causing URLs like:
```
whizbangscandy.com/locations/?/&/~and~/~and~/~and~/~and~/~and~/miami
```

### Solution Applied
1. Removed GitHub Pages redirect script from [index.html](index.html) (lines 19-42)
2. Updated [public/404.html](public/404.html) to use simple sessionStorage-based redirect
3. Added `RedirectHandler` component in [src/App.tsx](src/App.tsx) to handle 404 redirects properly

**How it works now:**
- When a user hits a 404 (e.g., direct navigation to `/locations/miami`), Render serves `404.html`
- `404.html` stores the path in sessionStorage and redirects to `/`
- React app loads and `RedirectHandler` restores the correct route using React Router
- Clean URLs, no query string pollution, no infinite loops

**Status:** Fixed and verified in build.
