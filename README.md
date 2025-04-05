# Boycott Beacon Website

<p align="center">
  The official website for the Boycott Beacon browser extension, built with Hugo. This site provides information about the extension, lists available boycott campaigns, and offers ways to support the project.
</p>

<h2 align="center">
  <a target="_blank" href="https://boycott-beacon.github.io" rel="nofollow">👀 Live Site</a> |
  <a target="_blank" href="https://pagespeed.web.dev/report?url=https://boycott-beacon.github.io">Page Speed Test</a>
</h2>

<p align="center">
  <a href="https://github.com/gohugoio/hugo/releases/tag/v0.115.1" alt="Hugo Version">
    <img src="https://img.shields.io/static/v1?label=min-HUGO-version&message=0.115.1&color=f00&logo=hugo" />
  </a>
  <a href="https://github.com/neural-loop/boycott-beacon-website/blob/main/LICENSE"> <!-- << UPDATE LINK TO YOUR REPO -->
    <img src="https://img.shields.io/github/license/neural-loop/boycott-beacon-website" alt="license"> <!-- << UPDATE REPO -->
  </a>
  <!-- Add other relevant badges if desired -->
</p>

---

<!-- Optional: Add a screenshot of YOUR website -->
<!-- <p align="center">
<img src="[LINK_TO_YOUR_SCREENSHOT.png]" alt="screenshot" width="100%">
</p> -->

---

## 📌 Key Features

*   **Extension Information:** Clear explanation of what Boycott Beacon is and how it works.
*   **Privacy Focused:** Details the extension's commitment to user privacy with local processing.
*   **Campaign Listing:** Browse available boycott campaign manifests.
*   **Campaign Details:** View specific information, reasons, and citations for each campaign.
*   **Easy Subscription:** Direct links to subscribe to campaigns via the Boycott Beacon extension (requires extension installed).
*   **Support Options:** Information on how to support the project financially or through contributions.
*   **Open Source:** Built with transparency in mind.
*   **Responsive Design:** Adapts to various screen sizes.
*   **Automated OG Image Generation:** Automatically creates social sharing preview images for content pages.
*   **Automated Favicon Generation:** Generates necessary favicon formats from a source logo.

## 🛠️ Local Development

1.  **Clone the repository:**
    ```bash
    # Replace with your actual repository URL
    git clone git@github.com:neural-loop/boycott-beacon-website.git
    cd boycott-beacon-website
    ```

2.  **Install Dependencies:**
    ```bash
    # Ensure Node.js and npm are installed
    npm install
    ```
    *This installs helper packages for build scripts.*

3.  **Install Hugo:**
    Make sure you have Hugo (Extended version, minimum `0.115.1`) installed. See [Hugo Installation Guide](https://gohugo.io/getting-started/installing/).

4.  **Install Build Tools:**
  *   **ImageMagick:** Required for generating favicons and logos.
      ```bash
      # On Debian/Ubuntu
      sudo apt-get update && sudo apt-get install imagemagick
      # On macOS (using Homebrew)
      # brew install imagemagick
      ```
  *   **wkhtmltoimage:** Required for generating Open Graph images. Download from the [wkhtmltopdf website](https://wkhtmltopdf.org/downloads.html) and ensure it's in your system's PATH.

5.  **Run the Development Server:**
    ```bash
    # Using npm script (Recommended, runs pre-build steps if any)
    npm run dev
    # Or directly using Hugo
    # hugo server --buildFuture
    ```
    *The site will be available at `http://localhost:1313/` (or another port if 1313 is busy).*

## 🔧 Deployment

This project includes configuration files for easy deployment:

*   **Netlify:** Click the button below or configure manually using `netlify.toml`.
    [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=[YOUR_PROJECT_REPO_URL]) <!-- << UPDATE REPO URL -->
*   **Vercel:** Deploy using the Vercel dashboard or CLI. The `vercel.json` and `vercel-build.sh` files provide the necessary configuration. Ensure ImageMagick and wkhtmltoimage are available in the Vercel build environment (may require adjustments to `vercel-build.sh` or build settings).

The build command (`npm run build`) handles image generation and the Hugo build process.

## 🤝 Contributing & Support

Boycott Beacon is a community-driven project.

*   **Reporting Issues:** Find a bug or have a feature request? Please search [existing issues](https://github.com/neural-loop/boycott-beacon-website/issues) and if necessary, [open a new issue](https://github.com/neural-loop/boycott-beacon-website/issues). <!-- << UPDATE REPO URL -->
*   **Contributing Code:** We welcome pull requests! Please check the main [Boycott Beacon extension repository](https://github.com/neural-loop/boycott-beacon) for overall project guidelines. <!-- << UPDATE REPO URL -->
*   **Supporting the Project:** Visit our [Support Page](/support/) to see how you can help keep Boycott Beacon running.

## 📝 License

The specific code modifications and content for the Boycott Beacon website are released under the [MIT License](LICENSE).

The underlying Hugo theme structure is based on the "Educenter Hugo" theme by [Themefisher](https://themefisher.com) & [Gethugothemes](https://gethugothemes.com), which is also released under the MIT license (see `themes/boycott-beacon/LICENSE` if you kept the theme structure, or the original LICENSE file if merged).

## 👍 Acknowledgements

*   **Hugo:** The static site generator powering this website.
*   **Educenter Theme:** The base theme structure provided by Themefisher/Gethugothemes.
*   **ImageMagick & wkhtmltoimage:** Tools used for image generation scripts.
*   **Contributors:** Everyone who helps improve Boycott Beacon!
