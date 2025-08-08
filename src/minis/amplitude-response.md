---
title: "Amplitude and Phase Response"
date: "Aug 28 2024"
---

# Introduction

A damped oscillator on a spring, forced by some function $F(t)$, can be expressed with the following linear, nonhomogeneous differential equation:
$$m \ddot{x} + b\dot{x} + kx = F(t)$$
where $m$ refers to the mass and $k$ refers to the spring constant. The driving force $F(t)$ is referred to as the *input* to the system.

# Sinusoidal inputs
A common input for $F(t)$ is some sinusoid, for example, 
$$F(t) = B \cos{(\omega t)}$$
which has an initial amplitude of $B$. By the exponential input theorem [discussed in my last post](https://chun.cat/blog/differential-operators), we find that the particular solution to the general differential equation 
$$m \ddot{x} + b\dot{x} + kx = B \cos{(\omega t)}$$
takes the form
$$x_p = \text{Re}\left[\frac{Be^{i\omega t}}{p(i\omega)}\right] = \frac{B}{|p(i\omega)|} \cos{(\omega t - \phi)} = \frac{B}{\sqrt{(k-m\omega)^2+b^2\omega^2}}\cos{(\omega t - \phi)}$$
where $p(i\omega)$ refers to the characteristic polynomial with $i\omega$ plugged in.

Note that this particular solution is in the same general form as the input, but with some augmented amplitude. It is therefore helpful to define something known as the *gain*, or the *amplitude response*, which is the ratio of the amplitude of the output $x_p$ to the amplitude of the input $F(t)$. Since both contain a multiplication by $B$, therefore, the formula for the gain is 
$$g(\omega) = \frac{1}{|p(i\omega)|} = \frac{1}{\sqrt{(k - m\omega)^2 + b^2\omega^2}}$$
This amplitude response summarizes the size of the output amplitude given some input frequency. The quantity $g(\omega)$ can be plotted against $\omega$ to find a peak in the graph, at which the amplitude response is the largest -- this $\omega$ is known as the practical resonance frequency. If the graph increases asymptotically at some $\omega$, it achieves perfect resonance when the input is a sinusoid with that frequency.