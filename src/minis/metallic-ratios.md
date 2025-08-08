---
title: "Metallic Ratios"
date: "Nov 4 2022"

---

We've all heard of the golden ratio; it's a well observed phenomenon across nature, often seen in surprising places: from the spirals of a pinecone to the perceived root of aesthetic beauty. 
There is something to be said about this prevalence in nature; the golden ratio can be thought of as just a consequence of an exceedingly simple idea; the ratio between one thing and the next being equal to the ratio between that next object and its next. 
In fact, among the derivations of the golden ratio lies the idea of the Fibonacci sequence (which we'll touch on later), which itself came from the goal of modeling the reproduction of rabbits. 

Although it has many definitions, the golden ratio (often notated φ) is often thought of as the relationship: 

$$\frac{a + b}{a} = \frac{a}{b} = \varphi$$

This ties in to the idea of the famous *golden rectangle*, in which sides are aligned in proportion to φ.
Now, what can we do with this relation? Turns out, we can solve exactly for the value of φ through some simple algebraic manipulations. 

$$\frac{a + b}{a} = 1 + \frac{b}{a}$$

$$1 + \frac{1}{\varphi} = \varphi$$

$$\varphi + 1 = \varphi^2$$

$$\varphi^2 - \varphi - 1 = 0$$

Remember this quadratic (we'll call it equation *(1)*); this will be useful to us later on. We can solve exactly for the value of φ through the quadratic formula, which yields 

$$\varphi = \frac{1 + \sqrt{5}}{2}$$

Another way to describe the golden ratio lies in its connection to the Fibonacci sequence; it is the asymptotic value of the ratio between two consecutive Fibonacci numbers, or

$$\lim_{n \to \infty} \frac{F(n)}{F(n-1)}$$

where *F(n)* denotes the nth Fibonacci number. Intuitively, this makes sense; recall the definition of the Fibonacci sequence:

$$F(n) = F(n - 1) + F(n - 2)$$

So, the ratio between the nth Fibonacci number and the (n-1)th Fibonacci number is 

$$\frac{F(n)}{F(n-1)}$$

And the ratio between the (n+1)th Fibonacci number will be 

$$\frac{F(n+1)}{F(n)} = \frac{F(n) + F(n - 1)}{F(n)}$$

Does this look familiar? We have stumbled upon something reminiscent of our original definition of φ. Let us, once again, perform some algebraic manipulations. First, let's take the limit of both sides of our equation directly above (we'll call this equation *(2)*).

$$\lim_{n \to \infty} \frac{F(n + 1)}{F(n)} = \lim_{n \to \infty} 1 + \frac{F(n-1)}{F(n)}$$

Suppose

$$\varphi = \lim_{n \to \infty} \frac{F(n + 1)}{F(n)}$$ 

We can take the reciprocal of this quantity, which gives us the equation 

$$\frac{1}{\varphi} = \lim_{n \to \infty} \frac{F(n)}{F(n + 1)}$$

Now, we'll make a slight switch: instead of having a numerator of *F(n)*, what I want is *F(n-1)*; and similarly, I want the denominator to be *F(n)*. Note that this is a perfectly valid switch; *n* goes to infinity anyway. 

$$\frac{1}{\varphi} = \lim_{n \to \infty} \frac{F(n - 1)}{F(n+1)}$$

Now, realize that we can perform a few substitutions back into equation *(2)*. 

$$\varphi = 1 + \frac{1}{\varphi}$$

This is exactly where we started with our original derivations of the exact value φ; in fact, two more algebraic manipulations will yield our exact quadratic as found earlier, equation *(1)*.
Now, we'll have one last look at the golden ratio; namely, its expression as the continued fraction 

$$\varphi = 1 + \frac{1}{1 + \frac{1}{1 + \frac{1}{1 + \frac{1}{\ddots}}}}$$

Notice how we can substitute some part of the continued fraction with φ, once again, leaving us with the equation 

$$\varphi = 1 + \frac{1}{\varphi}$$

Given how we've done two of these already, it's not hard to see that this leads back to our original quadratic, equation *(1)*!
This is an extremely beautiful set of relations, in my view; they are many different, seemingly unrelated things pointing into a single direction. However, this may leave you wondering, do more of these numbers exist?

# silver ratios
In fact, they do. The silver ratio, somewhat reminiscent of the golden ratio, is defined to be the relation 

$$\frac{2a + b}{a} = \frac{a}{b} = \delta_S$$

Let's do some rearrangement here: 

$$2 + \frac{b}{a} = 2 + \frac{1}{\delta_S} = \delta_S$$

$$2\delta_S + 1 = \delta_S^2$$

$$\delta_S^2-2\delta_S - 1 = 0$$

$$\delta_S = \frac{2 + \sqrt{8}}{2} = 1 + \sqrt{2}$$

There are sequences and continued fractions for this, as well. The Pell sequence ([OEIS A000129](https://oeis.org/A000129)) is to the silver ratio as the Fibonacci sequence is to the golden ratio; if we take the limit as the ratio between successive Pell numbers goes to infinity, 

$$\lim_{n \to \infty} \frac{P(n + 1)}{P(n)} = \frac{P(n-1) + 2P(n)}{P(n)}$$

then we arrive at that same kind of quadratic

$$\delta_S^2-2\delta_S - 1 = 0$$

through the exact same process. In addition, we can express the silver ratio as a continued fraction; that is, 

$$2 + \frac{1}{2 + \frac{1}{2 + \frac{1}{2 + \frac{1}{2 + \ddots}}}}$$

With the exact same process as performed for the golden ratio, we once again end up at a number that fulfills similar roles for slightly different mathematical entities.

# In Generality
These kinds of ratios (dubbed metallic ratios, hence the title of this blog post) can be derived in generality. Similar to the Golden and silver ratios, the mth metallic ratio is defined as 

$$\frac{ma + b}{a} = \frac{a}{b} = \delta_m$$

In solving for an exact value, we end up with the expression 

$$\delta_m = \frac{m + \sqrt{m^2 + 4}}{2}$$

We can check that this formula does, indeed, work with both the Golden and silver ratios. With similar algebraic manipulation, we can make out that 

$$\delta_m = m + \frac{1}{m + \frac{1}{m + \frac{1}{m + \frac{1}{\ddots}}}}$$

As well as 

$$\delta_m = \lim_{n \to \infty} \frac{M(n + 1)}{M(n)}$$

for some sequence *M* such that 

$$M(n + 1) = mM(n) + M(n - 1)$$