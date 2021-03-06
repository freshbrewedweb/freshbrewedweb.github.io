---
layout: webapps
title: Web Apps
permalink: /web-apps/
description: We make beautiful web apps that do exactly what they need to.
custom_js:
    - typed
    - coding
---

Several years ago, I considered whether I should make the jump from producing apps for the web to iphone or android. I decided to stick with web apps for a few reasons, and I'm glad I did.

1. Web apps are ubiquitous. <small>A browser can run on virtually any platform, so an app made for a browser (web app), will have greater reach.</small>
2. I'm betting on the internet. <small>As popular as phone or desktop OS's are, I'm willing to bet that the internet will be more popular and especially more universal now and into the futur.</small>
3. We can wrap a web app natively anyway. <small>The power of a browser, and therefore web apps, has gotten to the point that they can be easily wrapped and ported to a native system like macOS or Windows. Why write the code 3 separate times when you can write it once and have it shipped natively and on the web with the same code? This saves you time and money.</small>

## Preferred weapons of choice
Most of our apps are built with the following tools, frameworks & languages:

- [MariaDB](https://mariadb.org/)
- [PHP 7](http://php.net/)
- [Laravel](https://laravel.com/)
- [Lumen](https://lumen.laravel.com/)
- [ReactJS](https://facebook.github.io/react/)
- [webpack](https://webpack.js.org/)
- [Sass](http://sass-lang.com/)
- [Git](https://git-scm.com/)
- [nginx](https://nginx.org/en/)

## Our Apps

**[Oakparks](https://oakparks.org/)** is our biggest maintained web app. It's the web's largest database and runs off of its own [RESTful JSON API](http://docs.oakparks.apiary.io/#). It was built with Laravel (PHP, SQL, nginx) and includes several adaptable web crawlers, data normalization classes, and performance optimization techniques to work with a database of several million entries.

**[Online Hearing Test](https://www.audicus.com/online-hearing-test)** is a ReactJS app to thoroughly and accurately test user's hearing. Its frontend is entirely built in React, uses the redux approach to global state, connects to other web services such as Amazon SES for email notifications, and connects directly to Salesforce to save its data.
