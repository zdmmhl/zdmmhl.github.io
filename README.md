# XSS Lab Site

A supporting site used during XSS attack exercises for UNSW COMP6443 Topic 5. It hosted browser-side scripts and pages used to demonstrate data exfiltration from a vulnerable lab page.

## Role in the exercises

The site served as external infrastructure for the XSS exercises. In the preserved `analytics.js`, the browser changes the page title and sends JavaScript-accessible cookies (`document.cookie`) and the current page URL to a configured webhook endpoint using an image request.

The hosted script and the collection endpoint are separate: this repository hosts the browser-side content, while the referenced webhook receives the transmitted values. Cookies marked `HttpOnly` are not accessible through `document.cookie`.

## Files

- `analytics.js`: the browser-side script described above.
- `phish.html` and `layoff.html`: additional pages retained from the coursework exercises.

## Project context

Original repository name: `zdmmhl.github.io`.

The files preserve the original laboratory implementation and endpoint references. The experiments have not been rerun as part of this documentation update, and the original laboratory services may no longer be available.

Review the script and endpoint configuration before opening or deploying the pages. Any future demonstration should use a controlled lab and synthetic data.
