---
title: Closing the Alignment-Maturity Gap in Federated Prototype Learning
authors:
  - Mario Casado-Diez
  - Alejandro Dopico-Castro
  - Verónica Bolón-Canedo
  - Bertha Guijarro-Berdiñas
year: 2026
type: preprint
venue: arXiv
arxiv: '2606.02172'
pdf: https://arxiv.org/pdf/2606.02172
abstract: >-
  Learning discriminative visual representations from distributed, heterogeneous data
  is a fundamental challenge in Federated Learning (FL). Prototype-based methods
  address statistical heterogeneity by sharing class-level representations across
  clients but create a distance-dependent gradient pressure that is particularly
  severe during early training rounds: alignment pressure applied to immature global
  prototypes, aggregated from noisy local representations, generates large gradients
  that suppress the emergence of local discriminative structure. The result is a
  poorly organized embedding space and degraded recognition performance, particularly
  under severe non-IID conditions. We propose FedSAP, a framework that stabilises
  federated representation learning through two complementary mechanisms: a deterministic
  alignment curriculum that delays global alignment until local representations become
  stable and a geometry-driven proxy separation loss that enforces inter-class structure
  on the unit hypersphere using the existing prototype bank without introducing
  additional parameters or communication overhead. Together, these mechanisms produce
  compact, well-separated class clusters without altering the underlying communication
  protocol between federation's participants. Experiments across three benchmarks
  and varying degrees of heterogeneity show gains of up to 4 percentage points over
  the prototype-based baselines evaluated, with improvements most pronounced under
  high heterogeneity. The representational nature of our framework further enables
  a straightforward extension to semi-supervised settings, where unlabelled data is
  incorporated with minimal modification, underscoring the generality of scheduled
  alignment as a design principle.
featured: false
draft: false
---
