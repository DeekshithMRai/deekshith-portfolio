# EmailJS Setup Guide

The contact form uses [EmailJS](https://www.emailjs.com/) to send emails without a backend.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month)

## Step 2: Add Email Service

1. Go to **Email Services** → **Add New Service**
2. Choose **Gmail** (or your preferred provider)
3. Connect your email: `deekshithmrai02@gmail.com`
4. Copy the **Service ID** (e.g. `service_abc123`)

## Step 3: Create Email Template

1. Go to **Email Templates** → **Create New Template**
2. Use this template:

**Subject:** `Portfolio Contact: {{subject}}`

**Body:**
```
New message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Subject: {{subject}}

Message:
{{message}}
```

3. Set **To Email** to: `deekshithmrai02@gmail.com`
4. Copy the **Template ID** (e.g. `template_xyz789`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Add to Project

Create `.env.local` in the project root:

```env
VITE_EMAILJS_SERVICE_ID=service_your_id_here
VITE_EMAILJS_TEMPLATE_ID=template_your_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

## Step 6: Test

```bash
npm run dev
```

Go to the Contact section, fill the form, and submit. Check your inbox.

## Vercel Deployment

Add the same three environment variables in:
**Vercel Dashboard → Project → Settings → Environment Variables**
