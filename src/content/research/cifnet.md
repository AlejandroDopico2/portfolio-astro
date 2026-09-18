---
title: 'CIFNet: An Analytic Neural Learning Framework for Efficient and Calibrated Class-Incremental Learning'
authors:
  - Alejandro Dopico-Castro
  - Oscar Fontenla-Romero
  - Bertha Guijarro-Berdiñas
  - Amparo Alonso-Betanzos
year: 2025
type: preprint
venue: arXiv
doi: 10.48550/arXiv.2509.11285
arxiv: '2509.11285'
pdf: https://arxiv.org/pdf/2509.11285
code: https://github.com/AlejandroDopico2/CIFNet
abstract: >-
  Class-Incremental Learning (CIL) in deep neural networks is conventionally framed
  as an iterative gradient-based optimization problem, incurring high computational
  cost, hyperparameter sensitivity, and risk of catastrophic forgetting. In this work,
  we demonstrate that when leveraging frozen pre-trained representations, CIL can be
  solved as a sequence of deterministic, closed-form classifier adaptations without
  backpropagation or iterative convergence. We propose CIFNet, an analytic neural
  learning framework built upon Regularised Recursive Least-Squares (RRLS). CIFNet
  updates classifier weights via an exact, closed-form ridge-regression solution
  operating in a stationary embedding space. To counteract the structural initialisation
  bias that arises when newly expanded output neurons are introduced without exposure
  to past-class evidence, CIFNet incorporates a lightweight calibration buffer in
  latent space alongside density-aware oversampling, ensuring globally balanced decision
  boundaries without raw image storage or gradient updates. Extensive evaluations
  across CIFAR-100, ImageNet-100, and CORe50 show that CIFNet achieves predictive
  accuracy competitive with iterative CIL baselines while maintaining strictly monotonic,
  smooth learning trajectories free from intermediate performance collapse. Furthermore,
  by replacing epoch-wise backpropagation with closed-form moment accumulation, CIFNet
  achieves up to 20× reduction in energy consumption. These findings establish calibrated
  analytic learning as an efficient, stable, and mathematically grounded paradigm
  for continual adaptation in neural networks.
featured: false
draft: false
---
