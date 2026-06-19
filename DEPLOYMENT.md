# Deployment Guide

## Step 1

Install:

- Node.js 22+
- PostgreSQL 16
- Git

## Step 2

Clone repository

```bash
git clone your-repository
```

## Step 3

Create .env

```bash
cp .env.example .env
```

## Step 4

Database

```bash
npm install
```

```bash
npm run db:push
```

```bash
npm run seed
```

## Step 5

Run application

```bash
npm run dev
```

Open:

http://localhost:3000

## Default Admin

Email:

admin@yourstore.com

Password:

Admin123!
