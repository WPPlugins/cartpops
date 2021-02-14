=== CartPops - High Converting Add To Cart Popup For WooCommerce ===
Contributors: cartpops
Donate link: https://cartpops.com
Tags: add to cart popup, added to cart, cart, shop, shopping cart, cart drawer, floating cart, woo-commerce, woocommerce
Requires at least: 5.1
Tested up to: 5.6.1
Requires PHP: 7.0
Stable tag: 1.2.11
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Add a beautiful, responsive, and conversion optimized add to cart popup to your WooCommerce powered store.

== Description ==

### 🚀 Your WooCommerce Store Is Only As Good As Your Cart Experience

**CartPops is a [WooCommerce Add To Cart Popup](https://cartpops.com/?utm_source=Link&utm_campaign=Readme&utm_medium=WP%20Repo&utm_term=Homepage), that helps every shop owner improve their user experience, increase conversions & maximize profits.**

This plugin allows you to show an elegant drawer/side cart each time a new product is added to the cart.

[Homepage](https://cartpops.com/?utm_source=Link&utm_campaign=Readme&utm_medium=WP%20Repo&utm_term=Homepage) | [Live Demo](https://cartpops.com/?utm_source=Link&utm_campaign=Readme&utm_medium=WP%20Repo&utm_term=Live%20Demo)

---

## Included For Free

Here's why CartPops beats your "standard" WooCommerce add to cart functionality.

[Learn more about CartPops features](https://cartpops.com/?utm_source=Link&utm_campaign=Readme&utm_medium=WP%20Repo&utm_term=Learn%20more%20about%20CartPops%20features)

### ✨ Simple One-Click Install

Add a beautifully designed add to cart popup to your WooCommerce store within seconds, making it easy for customers to quickly shop and check out. The popup launches when a customer clicks on any "add to cart" button.

### 🧑🏼‍🎨  Make it yours

The easy to use settings panel allows you to change every color of the cart without the technical overhead (no more CSS 🎉). It provides multiple color pickers that'll allow you to match it exactly to your brand.

**You can customize**

- Buttons
- Background colors
- Text colors
- Accent colors
- Border colors
- Overlay colors
- ... and much more

**✨ NEW:**  _Choose from different color palette presets. How does dark mode sound?_

### 🛒 Floating Cart Launcher

Add a floating cart icon to your page that allows customers to access their cart quickly

### 🛒 Cart Launcher Shortcode & Menu Item

The Cart Launcher shortcode `[cartpops_cart_launcher]`  enables you to place a WooCommerce cart icon in your menu or anywhere on your page.

- Choose from different unique shopping cart and bag icons.
- Select the type of indicator to use for the number of items in the cart. You optionally can hide the indicator if the cart is empty.
- Show or Hide the cart’s current subtotal
- If you own a CartPops Pro license, you'll also have access to the Elementor widget for even more advanced styling and control.

### ⚡️ **Power-ups**: Product Recommendation Engine

Squeeze more revenue out of your customers by recommending products directly in the popup!

- Customize the call to action text
- Select the type of products you want to promote, choose from upsells, crosses, or custom products (pro)
- Select a fallback: You can choose to display random products or hide the recommendations al together if no products were found.

### 🔥 There's more

- **🚀 Change the animation**: Choose how you like to animate the cart.
- **🌍 Translation Ready:** The CartPops codebase is ready to translate into your language.
- **Custom CSS and JS:** Add custom code on the fly that gets loaded after the plugin's code. No more `!important`.
- **💻 Developer Friendly:** Developers have access to customizable plugin templates (Beta), PHP Hooks and JS API (Beta), and a wide array of CSS variables.

---

## Pro Features

[Explore CartPops features](https://cartpops.com/?utm_source=Link&utm_campaign=Readme&utm_medium=WP%20Repo&utm_term=Explore%20CartPops%20features)

### 🛒 Choose From Different Add To Cart Triggers

Choose from different triggers: Cart Drawer, Popup Modal, and Bar. Each mode has a unique look and feel. Want to put more emphasis on recommendations? Activate the Popup and recommendation other items in your store.

### ⚡️ **Power-ups**: Free Shipping Progress Bar ■■■■□□□□□□ 40%

Motivate customers to add more products to their cart by showing a progress bar. For example, if a customer has $30 of products in their cart, you can show a dynamic progress bar that shows that another $20 is needed to unlock free shipping.

### ⚡️ **Power-ups**: Cart Launcher Elementor Widget

With this widget, you can easily style the Cart Launcher and show it anywhere you'd like. Take control of all the styling elements like text color, background color, hover effect, shadow, border, and much more!

**[👉 Get CartPops Pro today](https://cartpops.com/?utm_source=Link&utm_campaign=Readme&utm_medium=WP%20Repo&utm_term=👉%20Get%20CartPops%20Pro%20today)**

---

== Installation ==

1. Upload `cartpops.zip` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Make sure to disable caching on your checkout and thank you steps

== Screenshots ==

1. 🚀 CartPops in action!
2. 🎨 Over 24 individual color settings
3. ⚡️ Choose from multiple triggers (pro)
4. 👋 Recommend products to your customers inside the cart

== Upgrade Notice ==

= Updating in general =

If you have a caching plugin installed, or use any sort of caching in your site (DNS caching, object caching, etc), please clear those caches to make sure your browser loads the updated scripts.

== Changelog ==

#### Version 1.2.11 - 14 February 2021
- **new**: Products with more than 1 variations are now shown directly in the Drawer. To save space it's in a sleek drop-down accordion. 🌈
- **new**: Customers can now "undo" after they delete something from their cart. ❌
- **new**: This is probably one of the more request features: Floating Cart Launcher item indicator 5️⃣. It's here! (Next up, hide the cart until something has been added to the cart).
- **upgrade**: Completely reworked all AJAX calls resulting a nice speed bump + CartPops should now be automatically recognized by most popular caching plugins. 🚀
- **upgrade**: Reworked how pricing is diaplyed, and included a bunch of WooCommerce hooks. This should enable support for bulk discount plugins etc.
- **upgrade**: Improved the full height Drawer on mobile so that it's actually full height. I weren't aware of [this iOS bug](https://allthingssmitty.com/2020/05/11/css-fix-for-100vh-in-mobile-webkit/). Sorry 😯. In the next update you can expect a proper JS solution to account for Android too.
- **upgrade**: Tiny CSS tweaks to the mobile Drawer. Mostly spacing and font sizing.

#### Version: 1.2.8 - 8 February 2021
- **new**: Reworked the quantity selectors. We received a lot of requests for a custom input field. Customers can now add any amount to the cart with just a few clicks. 💰
- **new**: Ya'll asked for it. You can translate CartPops directly in the settings. Of course you can still use the good old .pot file 🤓
- **upgrade**: By popular demand, CartPops will now stretch to the height of mobile devices and will not move past that height so that the checkout button will always be in view.
- **upgrade**: Reworked how we check stock completely. CartPops now properly checks for backorders and alike.
- **upgrade**: Reworked the Cart Laumcher shortcode and Elementor widget. WooCommerce fragments was causing a lot of issues with icons being replaced.
- **upgrade**: Decreased the total bundle size 🚀. We're also on pace to be completely free from jQuery.
- **upgrade**: Removed a small delay when a customer updates the cart, which results in a more snappy experience.

#### Version: 1.1.0 - 25 January 2021
- **upgrade**: Tiny tweaks to the coupon form on mobile.
- **upgrade**: Improve tax calculations when discounts and shipping is applied.

#### Version: 1.0.10 - 25 January 2021
- **new**: CartPops now supports tax calculation 🤓!
- **upgrade**: Fixed a bug with the Elementor icon not changing size.
- **upgrade**: Fixed missing text colors when cart is empty

#### Version: 1.0.9 - 24 January 2021
- **upgrade**: Hot fix that prevented styles from showing.

#### Version: 1.0.8 - 24 January 2021
- **upgrade**: Fix an issue with certain Pro colors being included in the free plugin.

#### Version: 1.0.7 - 24 January 2021
- We're trying to ship and fix bugs as fast as possible. Thanks for the support and feedback ❤️
- **upgrade**: Fix an issue with the Elementor cart widget not firing.
- **upgrade**: Improved translations. Made a translation? Get in touch with our team and we'll add it to the plugin.

#### Version: 1.0.6 - 23 January 2021
- **new**: Add an issue panel in the Dashboard tab to highlight potential issues preventing CartPops from working properly.
- **upgrade**: Fix an issue with the Cart Launcher shortocde where the subtotal got escaped too aggressively.
- **upgrade**: Fix an issue where Popup recommendations wouldn't show up.
- **upgrade**: Improve readme file by using actual Markdown links rather than HTML. Yes, sometimes I confuse the two.

#### Version: 1.0.5 - 19 January 2021
- We have a first release 🔥

#### Version: 0.9.0 - 4 January 2021
- **new**: Color themes & presets

#### Version: 0.8.0 - 4 January 2021
- **new**: Color themes & presets

#### Version: 0.7.1 - 3 January 2021
- **upgrade**: Menu cart compatibility for Avada.

#### Version: 0.7.0 - 2 January 2021
- Happy New Year 🎉!
- **upgrade**: Improve Popup mobile styling.
- **upgrade**: Tiny tweaks to the Free Shipping Meter.

#### Version: 0.6.1 - 30 December 2020
- **new**: **Free**: Menu Cart Launcher settings and colors!

#### Version: 0.6.0 - 29 December 2020
- **new**: **Free**: New Cart Launcher shortcode! This shortcode `[cartpops]` will show a shopping cart button anywhere you like, this will open the Drawer when a user clicks on it. Read more about it in the [documentation](https://cartpops.com/docs/cart-launcher?utm_source=ReadMe&utm_campaign=Documentation&utm_medium=ReadMe)
- **new**: **Pro**: Brand new Elementor integration for the Cart Launcher! Simply search for `cartpops` and you'll find it! Get a clickable shopping cart button with just a few clicks.
- **new**: **Free**: Ability to add the Cart Launcher to your menu. Simply head over to Appearance -> Menu. And find the **CartPops** tab. You can use this menu item anywhere you like. Read more about it in the [documentation](https://cartpops.com/docs/cart-launcher?utm_source=ReadMe&utm_campaign=Documentation&utm_medium=ReadMe)

#### Version: 0.5.9 - 28 December 2020
- **upgrade**: Always check customer session for improved loading
- **upgrade**: Improve default color options
