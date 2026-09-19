---
title: ArtLens
subtitle: HackUDC 2025 - Best Mobile App
description: A museum companion built during a 36-hour hackathon, combining visual retrieval and a local LLM to identify artworks and adapt their explanations to different visitors.
year: 2025
category: Hackathon
event: HackUDC
award: Best Mobile App
date: 2025-02-23
heroImage:
  src: ../../assets/images/work/artlens/team.jpg
  alt: The ArtLens team at HackUDC 2025
  caption: The team at HackUDC 2025
gallery:
  - src: ../../assets/images/work/artlens/home.jpeg
    alt: ArtLens home screen with visitor profile options for child, tourist, art student, and researcher
    caption: Choose a visitor profile
  - src: ../../assets/images/work/artlens/scan.jpeg
    alt: ArtLens scan screen photographing a print of The Garden of Earthly Delights
    caption: Scan an artwork
  - src: ../../assets/images/work/artlens/result.jpeg
    alt: ArtLens result screen with a generated description of The Garden of Earthly Delights
    caption: A description adapted to the selected profile
  - src: ../../assets/images/work/artlens/meninas.jpg
    alt: Las Meninas by Diego Velázquez, one of the works in the ArtLens collection
    caption: Las Meninas, part of the Prado collection we curated
links:
  - label: Devpost
    href: https://devpost.com/software/artlens
  - label: Backend
    href: https://github.com/HackUDC-2025/Backend
  - label: Frontend
    href: https://github.com/HackUDC-2025/Frontend
featured: true
draft: false
---

ArtLens was a project we built during [HackUDC 2025](https://hackudc2025.gpul.org/) together with [Antón](https://www.linkedin.com/in/anton-canzobre-mart%C3%ADnez-ba549a267) and [Mario](https://www.linkedin.com/in/mario-casado-diez). The idea was simple: point your phone at a piece of art and get an explanation adapted to you, without needing a guide.

The app lets you choose a visitor profile, scan an artwork, and receive a description tailored to that profile. A child, a tourist, and an art student would not necessarily need the same explanation, so we wanted the system to adapt the result to the person using it.

We built the whole thing in around 36 hours and ended up winning the Best Mobile App prize sponsored by NomaSystems.

## What we built

The main challenge was connecting the different parts of the system into something that actually worked as a mobile experience.

We used the [Museo del Prado](https://www.museodelprado.es/) as our main collection. One of the problems we ran into early was that there was no ready-to-use dataset containing the information we needed in a convenient format. We ended up scraping and curating a small dataset of around 100 artworks from the Prado, including pieces such as *Las Meninas* and *The Garden of Earthly Delights*.

The final flow was:

1. Choose a visitor profile.
2. Take a photo of an artwork.
3. Identify the most relevant artwork using visual embeddings.
4. Retrieve information about it from our collection.
5. Generate a description adapted to the selected profile.
6. Read the result aloud.

## How it worked

The visual part of the system was based on [CLIP](https://github.com/openai/CLIP). When the user scanned an artwork, we generated an embedding from the image and compared it with the embeddings of the artworks in our dataset.

We stored those embeddings in [Milvus](https://milvus.io/), which allowed us to perform similarity search and retrieve the closest artworks. This gave us the information we needed to build the context for the language model.

For the text generation step, we used LLaMA 3.2 locally through [Ollama](https://ollama.com/). Instead of sending the image or the user's data to an external API, the model ran locally and received the retrieved artwork information together with the selected visitor profile. We then used that context to generate a description suited to the intended audience.

Finally, [gTTS](https://gtts.readthedocs.io/) was used to turn the generated description into speech.

This setup also made the project relatively easy to adapt to another museum or collection. The main requirement would be replacing the artwork dataset and its corresponding embeddings.

## Building it in 36 hours

This was one of those projects where there was no time to build everything perfectly. We had to make decisions quickly, find workable solutions, and spend most of the hackathon getting the different pieces to talk to each other.

I worked mainly on the backend and AI side, from the visual search pipeline to the retrieval and local language model integration.

We didn't have much time, but the final result was a working prototype rather than just a demo of individual components. And winning the Best Mobile App prize made the lack of sleep feel a little more reasonable.
