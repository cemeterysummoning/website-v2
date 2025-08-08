---
title: "Differential Operators"
date: "Aug 28 2024"
---
# Introduction
The differential operator $D$ is the generalized notion of taking a derivative of a function. 
$$D y := \frac{d}{dx} y$$
If we apply this operator many times, we get successive derivatives of higher orders:
$$D(D y) = D^2 y = \frac{d^2 y}{dx^2} \to D^n = \frac{d^n}{dx^n}$$

Now, recall the structure of an ordinary, linear differential equation with constant coefficients:
$$a_n \frac{d^n}{dx^n} y + a_{n - 1}\frac{d^{n-1}}{dx^{n-1}} y + \cdots + a_1 \frac{d}{dx} y + a_0 y$$
Note that every term of this general equation contains a $y$. Excusing the abuse of notation, we will therefore factor the $y$ out of each term, leaving us with
$$\left(a_n \frac{d^n}{dx^n} + a_{n - 1}\frac{d^{n-1}}{dx^{n-1}} + \cdots + a_1 \frac{d}{dx} + a_0\right)y$$
Using what we defined earlier, we can express this notationally as
$$(a_n D^n + a_{n-1}D^{n-1} + \cdots + a_1 D^1 + a_0 D^0) y$$
Putting aside the fact that this is a much cleaner way of expressing our differential equation, we now have a *polynomial* in $D$ as an operator on $y$. We call this a *polynomial differential operator* $p(D)$, where 
$$p(D) = a_n D^n + a_{n - 1}D^{n-1} + \cdots + a_1 D + a_0 = \sum_{k = 0}^n a_k D^k$$
This polynomial $p$ is known as the *characteristic polynomial* of the differential equation.

As a consequence, we can now use some techniques from polynomial algebra to find solutions to linear differential equations. 
# Rules
## Linearity
As the derivative itself is a linear operation, the $D$ operator (and others involving it), too, follows the principle of linearity. That is, 
$$p(D) [c_1 y_1 + c_2 y_2] = c_1 p(D) y_1 + c_2 p(D) y_2$$
## Sum Rule
For polynomial operators $p(D)$ and $q(D)$, we can split the sum of $p$ and $q$ acting upon a function: 
$$[p(D) + q(D)] y = p(D) y + q(D) y$$
## Multiplication Rule
For some polynomial operator defined as the product of two others:
$$p(D) = a(D) \cdot b(D)$$
When we apply $p(D)$ to a function $y$, we are effectively applying $b(D)$ to $y$, and then applying $a(D)$ to its result:
$$p(D) y = a(D) (b(D) y)$$
First consider a simple case, where $a(D) = D^m$ and $b(D) = c \cdot D^k$, where $c$ is just a constant. 
$$a(D) \cdot b(D) = D^m \cdot c \cdot D^k = c \cdot D^{m + k}$$
Note that this only works when $c$ is a constant; were it a function, we would have had to apply the product rule. Since the above example was done in generality, it extends to every possible term of $a(D)$ and $b(D)$ by linearity. If both $a(D)$ and $b(D)$ have constant coefficients, then, it is possible to commute the two operators and maintain the same product:
$$p(D) = a(D) \cdot b(D) = b(D) \cdot a(D)$$
## Substitution Rule
First consider the function $y = e^{ax}$. Each nth derivative of $y$ yields itself times some constant, as per the properties of the exponential function. More specifically, 
$$D^n (e^{ax}) = a^n e^{ax}$$
When passed to a polynomial differential operator $p(D)$, we obtain the exact same polynomial but in $a$ -- we substitute $D$ for $a$, hence the name of this rule.
$$p(D) e^{ax} = p(a) e^{ax}$$
## Exponential Shift
Observe what happens when we apply $D$ to the product function $e^{ax} y$. By the product rule, 
$$D (e^{ax} y ) = e^{ax} D y + y D e^{ax} = e^{ax} D y + y a e^{ax}$$ 
Through some abuse of notation, we can turn that last expression into
$$D (e^{ax} y ) = e^{ax} (D + a) y$$
Successive cases for higher powers of $D$ can be proven through induction:
$$D^n (e^{ax} y ) = e^{ax} (D + a)^n y$$
Through the principle of linearity (and superposition), we  find the exponential shift rule:
$$p(D) (e^{ax} y) = e^{ax} p(D + a) y$$

## Sinusoids
Recall Euler's formula:
$$e^{iax} = \cos(ax) + i \sin(ax)$$
Given some sinusoidal input, such as $\sin{x}$, we can express it as either the real or, in this case, imaginary part of its corresponding complex exponential:
$$\sin{x} = \text{Im}[ e^{ix}]$$ 
Using this formulation, we can use the exponential shift or substitution rules to find the output after applying some $p(D)$ to the sinusoid, and taking the corresponding component (real or imaginary).
# Homogeneous Equations

For a homogeneous equation 
$$p(D) y = 0$$
the solutions will take the form of $e^{rx}$, where $r$ is a root of the polynomial $p$. $r$ is a k-fold root of $p$, then the $k$ linearly independent solutions yielded will be of the form 
$$e^{rx}, xe^{rx}, \cdots, x^{k-1} e^{rx}$$
If $r$ is complex, we use Euler's formula to convert the complex exponential to sinusoids. Note that $\sin$ and $\cos$ are linearly independent functions.
# Finding the Particular Solution

## Exponential inputs
A non-homogeneous linear differential equation of the form 
$$p(D) y = e^{ax}$$
has a particular solution of the form 
$$y_p = \frac{e^{ax}}{p(a)}$$
If the characteristic polynomial instead has some $s$-fold zero at $a$ (meaning that we'd need to multiply by another function to ensure linear independence), the particular solution takes the form 
$$y_p = \frac{x^s e^{ax}}{p^{(s)}(a)}$$
For sinusoidal inputs, we can revisit our strategy of expressing our sinusoid as either the real or imaginary part of a complex exponential. Once we find the particular solution through the given formulas, we may then apply either $\text{Re}$ or $\text{Im}$ to find our $y_p$.