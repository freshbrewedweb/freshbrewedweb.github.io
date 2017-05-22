---
layout     : post
title      : 9 Reasons to Choose a Static Site over WordPress
description: WordPress is often the default choice by many. But it would do them some good to enumerate just why exactly they're choosing WordPress over a simpler static website.
date       : 2017-05-19 19:00:00 -0500
categories : wordpress dev
---

As a development shop that specializes in WordPress among a few other things, it seems a bit counter-intuitive to be publishing an article about **why NOT** to use WordPress. The reason is because WordPress is a tool for us. Specifically, it's our main choice of CMS for many clients. And as a tool, it's job is to help get the job done efficiently, not to be the job itself.

A static website is still a very good choice for most. We can loosely define it as a site that has no database, and a very small - sometimes absent - programming layer. Sometimes it's literally just a handful of HTML, CSS and Javascript files that are created, which is exactly what WordPress will also compile to at the end of the day. In this case, we're just omitting all of the complications that it can bring.

As the most popular platform powering the web, we have many clients that are familiar with, with either having used or been recommended, WordPress. So, they come to us asking if we can build them a WordPress site that fits all their needs. It's at this point that we try and get them to forget about WordPress until we know exactly what their needs are, and do our best not to put the cart before the horse.

Here's some common reasons to reconsider:

## 1. Performance

Let's approach this in order of importance. The biggest reason to reconsider WordPress is the hit it takes in speed and performance. This isn't to say that WordPress is slow. It's only slow in the wrong hands ([see #8](#8-better-talent-pool)). However, the mere fact that it's dependent on database and needs to compile on the fly with will increase the overhead that's needed to render a simple HTML page.

If you're not running something like a media site or blog, that needs to be updated frequently and necessitates a database, there's no reason to build your 5 page business card website on top of such a dynamic engine like WordPress.

## 2. Security

Again, WordPress is only insecure in the wrong hands. It in fact has many good security measures to ensure it's safety. However, due to the fact that it powers over 1/4 of the internet's traffic, and it's code is open-source and viewable by all, it becomes a prime target for hackers.

In order to ensure your installation is secure, you must keep things extremely up-to-date and squeaky clean. Installing unknown plugins (or just poorly coded), leaving your the WordPress core 3 versions behind, or hosting on dubious platforms are all grounds for getting hacked. This leads us to our next point.

## 3. Updates and Maintenance

Because of the nature of a dynamic site like WordPress, it requires much more attention. As just mentioned, we need to keep it up-to-date, however, updating the core and especially plugins can often break the functionality of a site. We must then make sure we have a staged version of the site where we perform updates and testing regularly before migrating to the live version for the web to consume.

Also, because we've now assumably relinquished some of the updates to the client, they are prone to making mistakes while updating pages. Even if limited access and training is given, we're still more susceptible to human error. What often happens, is the client becomes somewhat weary of updating, or no longer willing to spend time on updates themselves because it requires time and attention, and they fallback to calling us to safely and efficiently make the updates for them. This all could have been avoided and saved a lot of money.

## 4. Cost

It should be clear by now that if it's not absolutely necessary to update your site yourself on a weekly basis, that the hidden and explicit costs of WordPress will not be worth it over its simpler static counter-part.

Paying us to do updates and maintenance on the site adds up. In fact, oftentimes, it takes slightly longer for us to update your content in WordPress than in a statically coded page if the update is somewhat complex.

Building a WordPress site from scratch is more expensive than a static one. In fact, step 1 of building a WordPress site is often simply coding a static site to start with.

Hidden costs in a WordPress site can include: more expensive hosting, costs of repairs, more complicated environments to maintain, upgrading, migrating, testing, finding a competent developer, premium plugins, and more. That static site will share some of these costs, but almost always to a lesser degree.

## 5. Flexibility

As mentioned, a WordPress site is derived from a static one. It follows that the static site will always be more flexible because it's not boxed in by the constraints of WordPress. Here are some of the things you're not limited to when not tied to WordPress:

- PHP as a programming language
- A Database
- A WordPress developer (Every WordPress developer should be able to code a static site, but not the inverse.)
- Aesthetics. WordPress works off of templates and so we must make the design of our pages consistent and template oriented in order to make use of the purpose of WordPress. Otherwise we fall into coding single WordPress templates for each page and it because a quasi static-WordPress monstrosity.
- Choosing another platform in the future. In the future, your needs may change and become more specific and you may need to port your site to a specific framework or platform. This is trivial with a static site because it's the basis for everything anyway. Not so much if you have a few hundred WordPress pages that are half in your database, half in your code, and half Frankensteined together with plugins.

## 6. Database

Having a database automatically causes overhead for every time you try and load a page. Your site must go to the database, retrieve information, compile it together with your code, and output it to the browser. A static site skips the first 3 steps. A lot of this can be overcome with a lot of caching and performance tricks, but it's a needless complication for most small websites.

## 7. Versioning, Migrations & Enhancements

A good site will have its code versioned so other developers can contribute to it, either now or in the future; have a deployment process for moving the site from a developer's computer, to a stage, to a live production area; and be easily maintained and flexible enough to add enhancements as the requirements of the site grows.

All of this can be done with WordPress, but again, it's much simpler, faster and effectively done with a static site. This saves you money and time, two things we noticed most of our clients value more over their attachment to WordPress.

## 8. Better Talent Pool

This one is a bit more subtle but still important. WordPress has a very low barrier to entry due to the fact that you can build a site off of a pre-existing WordPress theme (template), throw plugins at it to add functionality, and use page builders to customize the look. This means, some "developers" never even look at the code of the site. When it comes time to address more involved issues such as performance or very particular requests, your developer may become stuck because their technical knowledge is lacking.

Someone that can build a static website from scratch knows their code in-and-out and is less likely to be limited by the out-of-the-box functionality for which WordPress is known.

Also, as mentioned previously, you are choosing from a larger pool of competent developers when looking for someone to build a static site.

## 9. Do you even need it?

The final reason could've been the first, because it's the basis for all of the other arguments. It all comes down to the question, "do you really need it?" In general, choosing a tool that does 10 things and you only need 1 of them done is usually not a good idea. A tool with 10 functions is more expensive, less efficient and/or reliable in each of the tasks, and requires more specialized knowledge to use. Do you really need a jack-of-all trades, master of none, for a simple task? Or a single hammer for a couple of nails.
