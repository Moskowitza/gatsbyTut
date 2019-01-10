---
slug: '/fifth-post'
date: '2019-01-13'
title: 'Static and Page Queries'
---

# Query deets

Gatsby works with Static and Page Queries. Static Queries can be used anywhere, but are fix so they can't use context. Page Queries must be on gatsby pages and can take in context.

## Let's get nerdy

For our blog, we'll want to use a page query and pass in our slug via context. We can then run a page query and display our component's data to the user.

We can use context created in our gatsby-node.js file to pull the slug name from the ether. And because we're using a page query, we're good to use context.
