---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "NextBoost Docs"
  text: "A NPX Library"
  tagline: Supercharge Your Projects with Custom Code Templates!
  image:
    src: /Illustration.webp
    alt: VitePress
  actions:
    - theme: brand
      text: Get Started
      link: /guide/installation
    - theme: alt
      text: View On Github
      link: /api-examples

features:
  - icon: 📝
    title: Easy Template Selection
    details:  Quickly choose from a variety of project templates tailored to your development needs, saving you valuable time in project setup.

  - icon: <image src='https://turbo.build/images/docs/repo/repo-hero-logo-dark.svg' />
    title: Monorepo Support
    details: Whether you prefer Nx or Turborepo, NextBoost supports Monorepo project structures, making it easier to manage complex codebases.

  - icon: <image src='https://img.icons8.com/?size=200&id=gShesypkbo1o&format=png'/>
    title: Comprehensive Stack Integration
    details:  Integrate essential tools and technologies seamlessly, from PostgreSQL and Prisma to Jest and Storybook, to supercharge your development workflow.

  - icon: 🚀
    title: Rapid Template Setup
    details: Speed up your project initiation with NextBoost's lightning-fast template setup. Get your development environment ready in minutes, so you can focus on coding, not configuration.
---


<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);;

  --vp-home-hero-image-background-image: linear-gradient(90deg, #0700b8 0%, #00ff88 100%);;
  --vp-home-hero-image-filter: blur(40px);
}


@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>