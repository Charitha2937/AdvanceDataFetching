"# AdvanceDataFetching" 
# Next.js Rendering Modes Project

This project demonstrates **Advanced Data Fetching in Next.js App Router** using three rendering strategies:

1. **Static Site Generation (SSG)**  
2. **Server-Side Rendering (SSR)**  
3. **Incremental Static Regeneration (ISR / Hybrid Rendering)**

---

## **Folder Structure**

app/
├─ layout.js
├─ navbar.js
├─ page.js ← Home page
├─ about/
│ └─ page.js ← Static Page (SSG)
├─ dashboard/
│ └─ page.js ← Dynamic Page (SSR)
├─ news/
│ └─ page.js ← Hybrid Page (ISR)
└─ contact/
└─ page.js ← Static Page

yaml
Copy code

---

## **Pages & Rendering Modes**

| Page URL          | Rendering Mode | Explanation |
|------------------|----------------|-------------|
| `/about`          | Static (SSG)   | Rendered at build time. Ideal for content that does not change frequently. |
| `/dashboard`      | Dynamic (SSR)  | Rendered on every request. Useful for live data like dashboards. |
| `/news`           | Hybrid (ISR)  | Statically generated but revalidates periodically (every 20 seconds). Perfect for news feeds. |
| `/contact`        | Static (SSG)   | Simple static page. |

---

## **Why Each Approach Was Chosen**

1. **Static Rendering (SSG)** – `/about` & `/contact`  
   - Content is stable, does not change frequently.  
   - Fast performance because pages are prebuilt at deployment.  
   - No extra server load on requests.

2. **Dynamic Rendering (SSR)** – `/dashboard`  
   - Fetches live data on every request.  
   - Ensures users see up-to-date information.  
   - Slightly slower than SSG because the server renders on each request.

3. **Hybrid Rendering (ISR)** – `/news`  
   - Combines SSG and SSR.  
   - Page is prebuilt but re-generates in the background every 20 seconds.  
   - Balances **speed, freshness, and scalability**.

---

## **Data Fetching Examples**

**Static Page:**
```js
export const revalidate = false; // SSG