---
title: 'FedHENet: A Frugal Federated Learning Framework for Heterogeneous Environments'
authors:
  - Alejandro Dopico-Castro
  - Oscar Fontenla-Romero
  - Bertha Guijarro-Berdiñas
  - Amparo Alonso-Betanzos
  - Iván Pérez Digón
year: 2026
type: conference
venue: ESANN
arxiv: '2602.13024'
pdf: https://arxiv.org/pdf/2602.13024
code: https://github.com/AlejandroDopico2/FedHENet
abstract: >-
  Federated Learning (FL) enables collaborative training without centralizing data,
  essential for privacy compliance in real-world scenarios involving sensitive visual
  information. Most FL approaches rely on expensive, iterative deep network optimization,
  which still risks privacy via shared gradients. In this work, we propose FedHENet,
  extending the FedHEONN framework to image classification. By using a fixed, pre-trained
  feature extractor and learning only a single output layer, we avoid costly local
  fine-tuning. This layer is learned by analytically aggregating client knowledge in
  a single round of communication using homomorphic encryption (HE). Experiments show
  that FedHENet achieves competitive accuracy compared to iterative FL baselines while
  demonstrating superior stability performance and up to 70% better energy efficiency.
  Crucially, our method is hyperparameter-free, removing the carbon footprint associated
  with hyperparameter tuning in standard FL.
featured: true
draft: false
---
